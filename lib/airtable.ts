// Airtable integration for the Library section.
// Reads from Airtable at request time, with a 60-second cache.
// Falls back to the static LIBRARY array in lib/data.ts if Airtable
// is unreachable or env vars are missing — so the site never breaks.

import { LIBRARY, type LibraryItem } from "./data";

type AirtableRecord = {
  id: string;
  fields: {
    Title?: string;
    Kind?: "book" | "film" | "video" | "essay" | "album" | "podcast";
    Author?: string;
    Year?: string;
    Link?: string;
    When?: string;
    Note?: string;
    Published?: boolean;
    Order?: number;
  };
};

type AirtableResponse = {
  records: AirtableRecord[];
  offset?: string;
};

/**
 * Detects whether a URL is a YouTube or Vimeo video, and returns
 * the embed URL if so. Returns null for everything else.
 */
export function getEmbedUrl(url: string | undefined): string | null {
  if (!url) return null;

  // YouTube — handles youtube.com/watch?v=, youtu.be/, and youtube.com/shorts/
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  if (ytMatch) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?rel=0`;
  }

  // Vimeo — vimeo.com/12345678
  const vmMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vmMatch) {
    return `https://player.vimeo.com/video/${vmMatch[1]}`;
  }

  return null;
}

/**
 * Fetch the library from Airtable. Falls back to static data if the
 * Airtable env vars aren't set or the request fails.
 */
export async function getLibrary(): Promise<LibraryItem[]> {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Library";

  // Bail to static data if env vars aren't configured
  if (!token || !baseId) {
    return LIBRARY;
  }

  try {
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
      tableName
    )}?filterByFormula=${encodeURIComponent("{Published}=TRUE()")}&sort[0][field]=Order&sort[0][direction]=asc`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      // Cache for 60 seconds — adding an item shows up within a minute,
      // and we don't hammer the Airtable API on every page view.
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Airtable fetch failed:", res.status, await res.text());
      return LIBRARY;
    }

    const data: AirtableResponse = await res.json();
    if (!data.records || data.records.length === 0) {
      return LIBRARY;
    }

    // Map Airtable records to our LibraryItem shape
    const items: LibraryItem[] = data.records
      .filter((r) => r.fields.Title && r.fields.Kind)
      .map((r) => ({
        kind: r.fields.Kind!,
        title: r.fields.Title!,
        author: r.fields.Author || "",
        year: r.fields.Year,
        link: r.fields.Link,
        whenToReturn: r.fields.When || "",
        note: r.fields.Note || "",
      }));

    return items.length > 0 ? items : LIBRARY;
  } catch (err) {
    console.error("Airtable fetch error:", err);
    return LIBRARY;
  }
}
