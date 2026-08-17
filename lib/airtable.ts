// Airtable integration for the Library + Lessons sections.
// Both fetches use a 60-second cache and fall back to static data
// in lib/data.ts if the env vars are missing or the fetch fails.

import { LIBRARY, LESSONS, type LibraryItem, type Lesson } from "./data";

type LibraryRecord = {
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

type LessonRecord = {
  id: string;
  fields: {
    Number?: string;
    Title?: string;
    Body?: string;
    Takeaway?: string;
    Published?: boolean;
    Order?: number;
  };
};

type AirtableResponse<T> = {
  records: T[];
  offset?: string;
};

/**
 * Detects whether a URL is a YouTube or Vimeo video, and returns
 * the embed URL if so. Returns null for everything else.
 */
export function getEmbedUrl(url: string | undefined): string | null {
  if (!url) return null;

  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  if (ytMatch) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?rel=0`;
  }

  const vmMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vmMatch) {
    return `https://player.vimeo.com/video/${vmMatch[1]}`;
  }

  return null;
}

/**
 * Fetch the library from Airtable. Falls back to static data on error.
 */
export async function getLibrary(): Promise<LibraryItem[]> {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Library";

  if (!token || !baseId) return LIBRARY;

  try {
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
      tableName
    )}?filterByFormula=${encodeURIComponent("{Published}=TRUE()")}&sort[0][field]=Order&sort[0][direction]=asc`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Airtable library fetch failed:", res.status, await res.text());
      return LIBRARY;
    }

    const data: AirtableResponse<LibraryRecord> = await res.json();
    if (!data.records || data.records.length === 0) return LIBRARY;

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
    console.error("Airtable library fetch error:", err);
    return LIBRARY;
  }
}

/**
 * Fetch the lessons from Airtable. Falls back to static data on error.
 */
export async function getLessons(): Promise<Lesson[]> {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_LESSONS_TABLE_NAME || "Lessons";

  if (!token || !baseId) return LESSONS;

  try {
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
      tableName
    )}?filterByFormula=${encodeURIComponent("{Published}=TRUE()")}&sort[0][field]=Order&sort[0][direction]=asc`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Airtable lessons fetch failed:", res.status, await res.text());
      return LESSONS;
    }

    const data: AirtableResponse<LessonRecord> = await res.json();
    if (!data.records || data.records.length === 0) return LESSONS;

    const items: Lesson[] = data.records
      .filter((r) => r.fields.Title && r.fields.Body)
      .map((r) => ({
        number: r.fields.Number || "",
        title: r.fields.Title!,
        body: r.fields.Body!,
        takeaway: r.fields.Takeaway,
      }));

    return items.length > 0 ? items : LESSONS;
  } catch (err) {
    console.error("Airtable lessons fetch error:", err);
    return LESSONS;
  }
}
