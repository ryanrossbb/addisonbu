# For Addison.

A graduation gift. A private, password-protected single-page website holding:

- An opening letter from an uncle to a nephew
- **Macro's Absolute Guide to Excellence** — all 30 quotes from Ryan's original Keynote deck
- A library of books, films, music, and essays worth returning to
- Six longer-form lessons learned over the last 30 years
- A vault index that points to where the real documents live (1Password, etc.)

Built with **Next.js 15**, **React 19**, **Tailwind v4**, and **TypeScript**. Deep midnight palette, Fraunces serif, brass accent, light/dark toggle.

---

## How to run it

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`. The first thing you'll see is the passphrase gate.

## Setting the passphrase

Open `components/Gate.tsx`. The top of the file has:

```ts
const PASSPHRASE = "addison2026";
```

Change it to whatever you and Addison agreed on — a family inside joke, a pet's name, the street he grew up on. Anything memorable. The gate is intentionally light-touch — this is a private gift between family, not a bank.

> **A note on real security:** this passphrase is checked in the browser, which means a determined person could view the source and find it. That's fine for "keep this off Google and out of casual hands." If you ever need *actual* security (you won't, for this), the right answer is to put the site behind Vercel's password protection feature or a Cloudflare Access policy.

## Editing the content

All content lives in **`lib/data.ts`**. Five sections, each a typed array:

1. **`LETTER`** — the opening note. Replace `"Uncle [Your Name]"` with your name. Tweak any paragraph.
2. **`QUOTES`** — all 30 from your Keynote deck, preserved in order. You can add an optional `explanation` field to any quote if you want to annotate it for Addison later.
3. **`LIBRARY`** — books, films, music, essays. Each one has a `whenToReturn` field — the marginalia that makes the list yours and not a Goodreads list.
4. **`LESSONS`** — long-form essays. The placeholder text is decent starter material, but the whole point is that *you* wrote it. Rewrite freely.
5. **`VAULT`** — an index of where Addison's documents live. The current entries assume you'll set up a shared 1Password vault. Adjust to match wherever you actually store things.

Save the file, the dev server hot-reloads, you see it instantly.

## Setting up the vault (the documents piece)

The vault section is just a directory — none of the actual sensitive documents are stored on this site. The recommended setup:

1. Get a **1Password Families** subscription (~$60/year, covers up to 5 family members).
2. Create a shared vault called "Addison" with just you and him in it.
3. Upload his birth certificate, SSN card scan, passport scan, transcript PDF, insurance cards, etc. as **Document items** inside that vault.
4. The site's vault index already references these. Adjust the `whereItLives` strings if you use a different password manager or folder structure.

Alternative: **Proton Drive** (end-to-end encrypted) or **Bitwarden** (free, open-source) both work for the same purpose.

## Hosting it privately

The cleanest path:

1. Push the repo to a private GitHub repo.
2. Connect it to **Vercel** (free tier, takes 2 minutes).
3. Optionally enable Vercel's **password protection** feature on the deployment — gives Addison a second, stronger layer.
4. Send Addison the URL and the passphrase. He bookmarks it.

That's it. The site will rebuild automatically every time you push changes to GitHub.

## Project structure

```
for-addison/
├── app/
│   ├── globals.css       # Tailwind v4 theme — midnight palette, brass accent
│   ├── layout.tsx        # Font loading + theme init script
│   └── page.tsx          # Page composition (Gate wraps everything)
├── components/
│   ├── Gate.tsx          # ← Passphrase gate (edit the passphrase here)
│   ├── Nav.tsx           # Sticky nav with section anchors
│   ├── ThemeToggle.tsx
│   ├── Letter.tsx        # Opening letter hero
│   ├── SectionHeading.tsx
│   ├── Quotes.tsx        # Macro's Absolute Guide to Excellence — 30 quotes
│   ├── Library.tsx       # Books / films / music / essays
│   ├── Lessons.tsx       # Long-form lessons
│   ├── Vault.tsx         # Document index
│   └── Footer.tsx        # Closing note
└── lib/
    └── data.ts           # ← All content. Edit this file.
```

## Adding more quotes / books / lessons later

Each section is driven by an array in `lib/data.ts`. To add anything new, just append an entry. The components iterate over the arrays and render automatically — no other code changes needed.

For example, to add a 31st quote:

```ts
{
  text: "Your new quote here.",
  attribution: "Someone wise",
  explanation: "Optional — leave it out for the quote to stand alone."
}
```

To add a book:

```ts
{
  kind: "book",
  title: "Title here",
  author: "Author name",
  year: "1999",
  whenToReturn: "When you need it.",
  note: "Why it matters to you."
}
```

---

Made for Addison. Maintained by you.
