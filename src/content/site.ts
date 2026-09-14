export const profile = {
  name: "Elena Chiang",
  location: "London",
  email: "elena.yychiang@gmail.com",
};

export const links = {
  cv: "/elena-chiang-cv.pdf",
  github: "https://github.com/elena1211",
  linkedin: "https://www.linkedin.com/in/yiying-chiang/",
};

export const skipLinkLabel = "Skip to content";

export const navigation = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const intro = {
  eyebrow: "Junior software engineer in London",
  headline: "Hi, I'm Elena. I'm looking for my first software engineering role.",
  paragraphs: [
    "I finished an MSc in Computer Science (conversion) at Queen Mary University of London in 2025 with a Distinction. My main project is LevelUp, a full-stack web app built with React, Django REST Framework and PostgreSQL.",
    "Before tech I worked in events and retail, where I coordinated teams, led shifts and kept things running when plans changed.",
  ],
  primaryCta: "See LevelUp",
};

export type LevelUpScreenshotName = "welcome" | "home" | "tasks" | "system";

type Screenshot = {
  alt: string;
  caption: string;
};

export const levelUp = {
  name: "LevelUp",
  tagline: "A gamified productivity web app, completed as my MSc project.",
  description:
    "LevelUp combines task management with XP, levels and attributes that update when a task is completed, and a hand-drawn character that grows from Lost Novice to Queen. I completed it with substantial AI assistance, and tested it with 8 participants, whose feedback changed the quest timing and the interface layout.",
  screenshots: {
    welcome: {
      alt: "LevelUp welcome screen showing five character stages from Lost Novice to Queen next to the sign-up options",
      caption: "Your character grows as you complete tasks.",
    },
    home: {
      alt: "LevelUp home screen with the character, six stat bars and the main goal",
      caption: "Stats, streak and the main goal at a glance.",
    },
    tasks: {
      alt: "LevelUp quest log with a weekly diary of completed tasks and a list of active quests",
      caption: "Quests can be added, edited and ticked off through the week.",
    },
    system: {
      alt: "LevelUp System screen showing a morning brief with two assigned missions",
      caption: "The System checks in each morning and evening.",
    },
  } satisfies Record<LevelUpScreenshotName, Screenshot>,
  highlights: [
    {
      title: "Each account's data stays private",
      body: "The API uses token authentication by default and filters every lookup by the signed-in user. Tests check that protected endpoints reject requests without a token and that one account can't read or change another account's data.",
    },
    {
      title: "Rewards are saved safely",
      body: "Each reward is written inside a database transaction that locks the user's row, so two quick taps on the same task can't overwrite each other's EXP.",
    },
    {
      title: "Every change is checked before it merges",
      body: "Pull requests run linting, a missing-migration check, Django's deployment checks, more than 200 backend tests with an 80% coverage floor, and the frontend tests and build, including a test run on PostgreSQL.",
    },
    {
      title: "The AI companion has limits",
      body: "The in-app System writes daily briefs and missions. User text is length-capped and kept out of the system prompt, the model's reply is validated before anything is saved, and the AI endpoints are rate-limited.",
    },
  ],
  stack: [
    "React, JavaScript, Vite",
    "Tailwind CSS",
    "Python, Django REST Framework",
    "PostgreSQL",
    "GitHub Actions",
    "Deployed on Vercel and Render",
  ],
  demoUrl: "https://levelup-jet.vercel.app/",
  demoNote:
    "The demo's server sleeps when idle, so the first visit can take about 30 seconds.",
  repoUrl: "https://github.com/elena1211/gamified_app",
};

export const about = {
  story: [
    "I studied literature and mass communication in Taiwan, then worked in events in Taipei and later coordinated livestreams for Tomsu across teams in Taiwan and South Korea. Most of that work was coordination: agreeing plans with clients, venues and vendors, briefing on-site teams, and keeping everyone updated when something changed.",
    "In London I work in retail, where I now lead shifts as a key holder: coordinating team coverage, setting priorities and resolving operational and customer issues. I want to bring that same reliability and communication to a software team.",
  ],
  timeline: [
    {
      years: "2024–now",
      title: "Sales Associate, then Key Holder / Sales Specialist",
      place: "VF Corporation (Dickies, Eastpak), London",
    },
    {
      years: "2024–2025",
      title: "MSc Computer Science (conversion), Distinction",
      place: "Queen Mary University of London",
    },
    {
      years: "2021, 2024",
      title: "Livestream and social media coordinator",
      place: "Tomsu, Taiwan",
    },
    {
      years: "2022–2023",
      title: "Sales Associate, London District MVP",
      place: "Skechers, London",
    },
    {
      years: "2019–2021",
      title: "MSc Events Management (Merit)",
      place: "Bournemouth University",
    },
    {
      years: "2013–2017",
      title: "Events and programme coordination",
      place: "Elite International Group, Taipei",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  paragraphs: [
    "Email is the quickest way to reach me. I'm open to roles in London or remote within the UK.",
    "I'm on a UK Graduate visa valid until January 2028, so I can work now without sponsorship. My notice period is one month.",
  ],
};
