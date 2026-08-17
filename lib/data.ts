// Everything in this file is a starter. Replace, reorder, delete freely.
// The shape of each type is the contract — the rest is for you.

export type Quote = {
  text: string;
  attribution: string;
  context?: string; // where you first heard it / what it means to you
  explanation?: string; // your annotation — optional; some quotes stand alone
  tags?: string[];
};

export type LibraryItem = {
  kind: "book" | "video" | "essay" | "album" | "film" | "podcast";
  title: string;
  author: string;
  year?: string;
  link?: string;
  whenToReturn: string; // "read it twice — once now, once at 30"
  note: string; // why it matters
};

export type Lesson = {
  number: string; // "01", "02"...
  title: string;
  body: string; // can be multiple paragraphs separated by \n\n
  takeaway?: string;
};

export type VaultEntry = {
  category: "Personal Records" | "Financial" | "Medical" | "Legal" | "Digital";
  label: string;
  whereItLives: string; // e.g. "1Password — Shared 'Addison' vault"
  note?: string;
};

// ── OPENING LETTER ──────────────────────────────────────────────────

export const LETTER = {
  greeting: "Dear Addison —",
  paragraphs: [
    "You're moving out of your house and into a new environment."
    "I've put together some ideas to help you make the most of the next 4 years."
    "You have huge potential, and my goal is for you to harness that into something positive for the world."
    "I will continue to update this - I'll let you know when I do."
    
    "First, very quickly, the point of college, in my opinion is mostly about 3 things."
    
    "Those 3 things aren't making great grades, winning a competition, or meeting your future wife. "
    
    "Instead, college is the time where you build systems composed of the following things you must MANAGE (do things using a skill) :

    " 1) time2) energy3) mood "
    
    "Time management is the most important. Elon Musk, Jeff Bezos, Bill Gates, your mom, and I all have the same 24 hours.  The actions you take in those 24 hours will separate you from others."
    
    "Energy management will help you with time management. If you're tired, it affects how much you can get done, if you don't know how to manage it. The opposite is also true."
    
    "Your mood will affect your energy management and your time management. Find out the things that make you happy, sad, frustrated, etc. Those are moods, and they affect how much you can get done if you don't know how to manage them. ",
    ,
  ],
  signoff: "— Uncle Ryan",
};

// ── QUOTES ──────────────────────────────────────────────────────────
// "Macro's Absolute Guide to Excellence" — Ryan's own curation,
// originally a Keynote deck. Name spellings normalized; attributions
// preserved as given. The unattributed "?" entries stay that way —
// Ryan didn't know the source, and the honesty matters more than
// a confident misattribution.

export const QUOTES: Quote[] = [
  {
    text: "Those who have a WHY can bear almost any HOW.",
    attribution: "Friedrich Nietzsche",
  },
  {
    text: "Successful people do what unsuccessful people won't even attempt.",
    attribution: "Lyrikal",
  },
  {
    text: "Whether you think you can, or think you can't, you're right.",
    attribution: "Henry Ford",
  },
  {
    text:
      "Men often become what they believe themselves to be. If I believe I cannot do something, it makes me incapable of doing it. But when I believe I can, then I acquire the ability to do it even if I didn't have the ability in the first place.",
    attribution: "Gandhi",
  },
  {
    text: "Enthusiasm finds the target. Discipline paves the road.",
    attribution: "@ndrewwang",
  },
  {
    text: "You cannot perform in a way inconsistent with the way you see yourself.",
    attribution: "Zig Ziglar",
  },
  {
    text: "Nothing succeeds like the appearance of success.",
    attribution: "Christopher Lasch",
  },
  {
    text:
      "We are what we repeatedly do. Excellence, therefore, is not an act, but a habit.",
    attribution: "Aristotle",
  },
  {
    text:
      "In order to lead a fascinating life — one brimming with art, music, intrigue and romance — you must surround yourself with precisely those things.",
    attribution: "Kate Spade",
  },
  {
    text: "Life is 10% what happens to you, and 90% how you react to it.",
    attribution: "Charles R. Swindoll",
    context: "Attitude is everything.",
  },
  {
    text: "Nothing hurts you if you don't let it.",
    attribution: "Ernest Hemingway",
  },
  {
    text: "Never sacrifice who you are because someone has a problem with it.",
    attribution: "Unknown",
  },
  {
    text: "A person who never made a mistake never tried anything new.",
    attribution: "Albert Einstein",
  },
  {
    text:
      "The only way to find the limits of the possible are by going beyond them into the impossible.",
    attribution: "Arthur C. Clarke",
  },
  {
    text:
      "Play the game for more than you can afford. Only then will you learn the game.",
    attribution: "Winston Churchill",
  },
  {
    text: "If we didn't have stupid thoughts, we'd have no good thoughts at all.",
    attribution: "Unknown",
  },
  {
    text: "No great mind ever existed without a touch of madness.",
    attribution: "Aristotle",
  },
  {
    text: "The difference between winning and losing is, most often, not quitting.",
    attribution: "Walt Disney",
  },
  {
    text: "Every accomplishment starts with the decision to try.",
    attribution: "Gail Devers",
  },
  {
    text: "It always seems impossible until it's done.",
    attribution: "Nelson Mandela",
  },
  {
    text: "The moment you give up is the moment you let someone else win.",
    attribution: "William Tecumseh Sherman",
  },
  {
    text: "Don't ask what the meaning of life is. Define it yourself.",
    attribution: "Denise Clarke",
  },
  {
    text: "Truth is not measured in mass appeal.",
    attribution: "Filipe Coronel",
  },
  {
    text: "Nothing great was ever achieved without enthusiasm.",
    attribution: "Ralph Waldo Emerson",
  },
  {
    text:
      "Impossible is just a big word thrown around by small men who find it easier to live in the world they've been given than to explore the power they have to change it. Impossible is not a fact, it is an opinion. Impossible is not a declaration, it is a dare. Impossible is potential. Impossible is temporary.\n\nImpossible is nothing.",
    attribution: "Muhammad Ali",
  },
  {
    text: "Accept no one's definition of your life; define yourself.",
    attribution: "Harvey Fierstein",
  },
  {
    text: "Life is as grand as you make it.",
    attribution: "Unknown",
  },
  {
    text:
      "If you want to find the secrets of the universe, think in terms of energy, frequency & vibration.",
    attribution: "Nikola Tesla",
  },
  {
    text:
      "Everything is energy and that's all there is to it. Match the frequency of the reality you want and you cannot help but get that reality. It can be no other way. This is not philosophy, this is physics.",
    attribution: "Albert Einstein",
  },
  {
    text:
      "No such thing as spare time. No such thing as free time. No such thing as down time. All you got is life time.\n\nGo.",
    attribution: "Henry Rollins",
  },
];

// ── LIBRARY ─────────────────────────────────────────────────────────

export const LIBRARY: LibraryItem[] = [
  {
    kind: "book",
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    year: "1946",
    whenToReturn: "Read once now. Read again the first time something terrible happens.",
    note:
      "A psychiatrist's account of surviving the camps, and the framework he built from it: that meaning is something you choose, not something that arrives. Short, brutal, essential. The middle section about the psychology of survival is the part that stays with you.",
  },
  {
    kind: "book",
    title: "The Death of Ivan Ilyich",
    author: "Leo Tolstoy",
    year: "1886",
    whenToReturn: "Once in your twenties. Once in your forties.",
    note:
      "A hundred and fifty pages on the death of an unremarkable man. It will make you reconsider what you're spending your life on. The fact that it was written in 1886 and still hits this hard is the proof.",
  },
  {
    kind: "book",
    title: "The Phantom Tollbooth",
    author: "Norton Juster",
    year: "1961",
    whenToReturn: "Now. And again when you have your own kids.",
    note:
      "I know it's a children's book. Read it as an adult. It's a serious argument for paying attention, dressed up as a story about a bored kid in a magic kingdom. The chapter with the conductor of the sunrise is the one I think about most.",
  },
  {
    kind: "film",
    title: "Before Sunrise / Before Sunset / Before Midnight",
    author: "Richard Linklater",
    year: "1995 / 2004 / 2013",
    whenToReturn: "Watch them nine years apart, the way they were made.",
    note:
      "Two people walk and talk. Three films, eighteen years of real time. Nothing happens and everything happens. Together they're the best argument I know that attention to one person, over time, is a kind of art form.",
  },
  {
    kind: "video",
    title: "This Is Water",
    author: "David Foster Wallace",
    year: "2005",
    link: "https://www.youtube.com/results?search_query=this+is+water+david+foster+wallace",
    whenToReturn: "Every two or three years.",
    note:
      "A twenty-minute commencement speech. It is about how to think, not what to think — specifically about the discipline of choosing what to pay attention to in a world that is rigged to choose for you. Wallace killed himself three years after giving it. That doesn't undo the speech.",
  },
  {
    kind: "essay",
    title: "The Crack-Up",
    author: "F. Scott Fitzgerald",
    year: "1936",
    whenToReturn: "When something is breaking and you can't name it.",
    note:
      "Fitzgerald in his late thirties, describing his own quiet psychological collapse — the kind that happens slowly and then all at once. The most honest writing on burnout I have ever read, written before the word existed.",
  },
  {
    kind: "album",
    title: "For Emma, Forever Ago",
    author: "Bon Iver",
    year: "2007",
    whenToReturn: "On a long drive alone, ideally in winter.",
    note:
      "Recorded by one guy in a cabin in Wisconsin after his band fell apart and his girlfriend left him. It is what 'making something out of a bad year' sounds like. Listen to it in order, all the way through, without skipping.",
  },
  {
    kind: "book",
    title: "Tao Te Ching",
    author: "Lao Tzu (Stephen Mitchell translation)",
    year: "~400 BCE / trans. 1988",
    whenToReturn: "Open to a random page. Repeat as needed.",
    note:
      "Eighty-one short poems on how to live. Not a book to read straight through — a book to keep on the nightstand. The Mitchell translation is the one I keep coming back to; the language stays out of the way. Most chapters are under a page.",
  },
];

// ── LESSONS ─────────────────────────────────────────────────────────

export const LESSONS: Lesson[] = [
  {
    number: "01",
    title: "Most things that feel like emergencies aren't.",
    body:
      "Almost every situation in your twenties that feels life-or-death will, in retrospect, have been a Tuesday. The lost job, the breakup, the failed exam, the friendship that ended badly — all of them feel terminal in the moment and most of them turn out to be a chapter break, not the end of the book.\n\nThe corollary, which took me longer to learn: the few things that ARE actual emergencies — a parent's diagnosis, a friend in real trouble, a moment when someone needs you to drop everything — usually arrive quietly. They don't feel like emergencies at first. You have to be the kind of person who shows up anyway.\n\nLearn to tell the difference. It's mostly about checking how loud the situation is. Real crises tend to whisper.",
    takeaway: "If it's screaming at you, it's probably not the thing.",
  },
  {
    number: "02",
    title: "The compound interest of small relationships.",
    body:
      "I spent my twenties believing the big career moves came from the big connections — the powerful boss, the famous mentor, the well-placed introduction. They didn't. Every meaningful door in my life was opened by someone I had known casually for years, who happened to remember me kindly when an opportunity crossed their desk.\n\nWhich means the thing to invest in isn't networking, exactly. It's just being a person other people enjoy hearing from. Reply to emails. Remember birthdays. Send the article that made you think of someone, with no agenda attached. Show up to the wedding. Show up to the funeral. Especially show up to the funeral.\n\nDo this for thirty years and you will have a life full of people who are quietly rooting for you. There is no shortcut, and there is no substitute.",
    takeaway: "Be easy to root for. It's the closest thing to a career hack that exists.",
  },
  {
    number: "03",
    title: "Money is a tool, not a scoreboard.",
    body:
      "The single biggest financial mistake I see people make — and I include myself in this — is treating their bank balance as a measure of how well their life is going. It isn't. It's a measure of how much of a particular resource they currently have, which is useful information for making decisions, and nothing else.\n\nThe practical version: spend less than you earn, save the difference, invest it in cheap index funds, don't touch it for forty years. That's ninety percent of personal finance. The other ten percent is psychological — learning not to compare your house to your friend's house, your car to your coworker's car, your salary to the salary someone posted on Reddit.\n\nThe people I know with the best relationships to money mostly aren't rich. They're people who decided early what 'enough' looked like for them and stopped moving the goalposts.",
    takeaway: "Decide what 'enough' means. Then defend it.",
  },
  {
    number: "04",
    title: "Read the contract. All of it. Out loud if you have to.",
    body:
      "Apartment leases. Job offers. Loan paperwork. Terms of service. The one your friend asks you to sign for their business. The one the dealership slides across the desk while you're excited about the car.\n\nNobody reads contracts. Everyone should. I have seen relationships, savings, and years of work disappear because someone didn't read paragraph fourteen on page eight. The hour it takes to read it is the cheapest insurance you will ever buy.\n\nIf the other party is annoyed that you're reading it carefully, that is information. Good faith parties expect you to read carefully and will wait while you do.",
    takeaway: "If they're rushing you to sign, don't sign.",
  },
  {
    number: "05",
    title: "Your body is going to send you bills you can't ignore.",
    body:
      "Everything you do to your body in your twenties shows up in your forties. The sleep you skipped, the back you tweaked moving a couch, the teeth you didn't floss, the sun you didn't wear sunscreen against — all of it accrues. You don't get to negotiate it down later.\n\nThe good news is that the maintenance is laughably cheap relative to the repair. Eight hours of sleep. A daily walk. Floss. Sunscreen. Strength training twice a week. An annual physical. If you do these six things consistently from twenty-five to forty-five, you will out-health ninety percent of your peers without ever joining a gym, drinking a green juice, or buying a supplement.\n\nThe boring version of health is the one that works. The exciting version is mostly marketing.",
    takeaway: "Sleep, walk, lift, floss, sunscreen, checkup. That's the whole list.",
  },
  {
    number: "06",
    title: "Learn to say 'I don't know.'",
    body:
      "Three of the most useful words in adult life, and most people lose the ability to say them somewhere around age twelve. You will be in meetings, dinners, arguments, and interviews where the expectation is that you have a confident opinion on something you've thought about for forty seconds.\n\nResist. 'I don't know enough about that to have a useful opinion' is a sentence that will earn you more credibility, over a lifetime, than any confidently-wrong take. The people I most trust are the ones who say it without flinching. The people I trust least are the ones who never do.\n\nRelated: when you do know something, say it clearly. False modesty is just as bad as false confidence — it wastes everyone's time and signals that you don't trust your own judgment.",
    takeaway: "Confidence without calibration is just noise.",
  },
];

// ── VAULT ────────────────────────────────────────────────────────────

export const VAULT: VaultEntry[] = [
  {
    category: "Personal Records",
    label: "Birth certificate",
    whereItLives: "1Password — 'Addison' shared vault → Documents",
    note: "You'll need this for your first passport renewal and for getting married. Keep the physical original somewhere safe at home.",
  },
  {
    category: "Personal Records",
    label: "Social Security card",
    whereItLives: "1Password — 'Addison' shared vault → Documents",
    note: "Memorize the number. Never carry the physical card in your wallet.",
  },
  {
    category: "Personal Records",
    label: "High school transcript & diploma",
    whereItLives: "1Password — 'Addison' shared vault → Documents",
    note: "Colleges and some employers will ask. The PDF here is the official sealed version.",
  },
  {
    category: "Personal Records",
    label: "Passport scan",
    whereItLives: "1Password — 'Addison' shared vault → Documents",
    note: "If you ever lose your passport abroad, having a scan accessible from your phone makes the embassy process dramatically faster.",
  },
  {
    category: "Financial",
    label: "Health insurance card & policy",
    whereItLives: "1Password — 'Addison' shared vault → Health",
    note: "You're on the family plan until you're 26. After that, you'll need your own — set a calendar reminder for six months before that birthday.",
  },
  {
    category: "Financial",
    label: "Auto insurance policy",
    whereItLives: "1Password — 'Addison' shared vault → Insurance",
  },
  {
    category: "Financial",
    label: "College financial aid paperwork",
    whereItLives: "1Password — 'Addison' shared vault → College",
  },
  {
    category: "Medical",
    label: "Vaccination records",
    whereItLives: "1Password — 'Addison' shared vault → Health",
    note: "Some colleges and most travel destinations will ask for these.",
  },
  {
    category: "Medical",
    label: "Primary care doctor — contact info",
    whereItLives: "1Password — 'Addison' shared vault → Contacts",
  },
  {
    category: "Legal",
    label: "Power of attorney form (blank, just in case)",
    whereItLives: "1Password — 'Addison' shared vault → Legal",
    note: "You don't need this now. You will eventually. Worth knowing where it is.",
  },
  {
    category: "Digital",
    label: "Master password recovery sheet",
    whereItLives: "Sealed envelope in the safe at home. Mom has the combination.",
    note: "If you ever get locked out of 1Password itself, this is the way back in. Do not store this digitally.",
  },
];
