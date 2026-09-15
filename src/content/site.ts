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

const targetRoles =
  "implementation, technical solutions, QA or technical business analysis";

export const intro = {
  eyebrow: "Computer Science graduate in London",
  headline: "Hi, I'm Elena. I'm looking for my first role in technology.",
  paragraphs: [
    `I finished an MSc in Computer Science (conversion) at Queen Mary University of London in 2025 with a Distinction, and I'm looking for an entry-level role in ${targetRoles}.`,
    "My main project is LevelUp, a full-stack web app built with React, Django REST Framework and PostgreSQL. Before tech I worked in events and retail, where I coordinated teams, led shifts and kept things running when plans changed.",
    "I'm on a UK Graduate visa valid until January 2028, so I can work now without sponsorship.",
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
    "LevelUp combines task management with XP, levels and attributes that update when a task is completed, and a hand-drawn character that grows from Lost Novice to Queen. I developed it with substantial AI assistance and recruited 8 participants for a questionnaire-based evaluation of registration, task flows, quest timing and onboarding, which identified priorities for refinement.",
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
      body: "Each reward is written inside a database transaction that locks the user's row, so two requests arriving at the same moment can't overwrite each other's XP.",
    },
    {
      title: "Every change is checked before it merges",
      body: "Pull requests run linting, a missing-migration check, Django's deployment checks, more than 200 backend tests with an 80% coverage floor, and the frontend tests and build, including a test run on PostgreSQL.",
    },
    {
      title: "The AI companion has limits",
      body: "The in-app System writes daily briefs and missions. User text is length-capped and kept out of the system prompt, values in the model's reply are checked and kept within limits before anything is saved, and the AI endpoints are rate-limited.",
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
    "I studied literature and mass communication in Taiwan, then worked in events and education programmes in Taipei, and later coordinated remotely with livestream presenters for Tomsu. Most of that work was coordination: agreeing plans with clients, venues and vendors, briefing on-site teams, and keeping everyone updated when something changed.",
    "In London I work in retail. As a key holder I lead opening and closing shifts, set floor priorities and share handover updates with colleagues. I want to bring that same reliability and clear communication to a technology team.",
  ],
  timeline: [
    {
      years: "2024–now",
      title: "Sales Associate, then Key Holder / Sales Specialist",
      place: "VF Corporation (Dickies, Eastpak), London",
    },
    {
      years: "2024–2025",
      title: "MSc Computer Science (Conversion), Distinction",
      place: "Queen Mary University of London",
    },
    {
      years: "2021, 2024",
      title: "Livestream and Social Media Coordinator",
      place: "Tomsu, Taiwan",
    },
    {
      years: "2022–2023",
      title: "Sales Associate",
      place: "Skechers, London",
    },
    {
      years: "2019–2021",
      title: "MSc Events Management, Merit",
      place: "Bournemouth University",
    },
    {
      years: "2020",
      title: "International Liaison Office Intern",
      place: "China UK Gateway, London",
    },
    {
      years: "2015–2017",
      title: "Vice Camp Director",
      place: "Elite International Education Group, Taipei",
    },
    {
      years: "2014–2015",
      title: "PR and Event Coordinator",
      place: "RS Multi-communication Consultancy, Taipei",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  paragraphs: [
    `Email is the quickest way to reach me. I'm open to entry-level roles in ${targetRoles}, in London or remote within the UK.`,
    "I'm on a UK Graduate visa valid until January 2028, so I can work now without sponsorship. My notice period is one month.",
  ],
};
