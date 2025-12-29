export const tags = {
  page: {
    about: { id: "about", href: "#about" },
    skills: { id: "skills", href: "#skills" },
    projects: { id: "projects", href: "#projects" },
    certificate: { id: "certificate", href: "#certificate" },
    experience: { id: "experience", href: "#experience" },
    education: { id: "education", href: "#education" },
  },
};

export const skill = {
  nextjs: { label: "Next.js", icon: "/icon/nextjs.svg" },
  nodejs: { label: "Node.js", icon: "/icon/nodejs.svg" },
  expressjs: { label: "Express.js", icon: "/icon/expressjs.svg" },
  bun: { label: "Bun", icon: "/icon/bun.svg" },
  elysiajs: { label: "Elysia.js", icon: "/icon/elysiajs.svg" },
  jwt: { label: "JSON Web Tokens", icon: "/icon/jwt.svg" },
  auth0: { label: "Auth 0", icon: "/icon/auth0.svg" },
  nextAuth: { label: "Next Auth", icon: "/icon/next-auth.svg" },
  prisma: { label: "Prisma ORM", icon: "/icon/prisma.svg" },
  postgresql: { label: "PostgreSQL", icon: "/icon/postgresql.svg" },
  mongodb: { label: "MongoDB", icon: "/icon/mongodb.svg" },
  supabase: { label: "Supabase", icon: "/icon/supabase.svg" },
  go: { label: "Go", icon: "/icon/go.svg" },
  docker: { label: "Docker", icon: "/icon/docker.svg" },
  html: { label: "HTML", icon: "/icon/html.svg" },
  css: { label: "CSS", icon: "/icon/css.svg" },
  javascript: { label: "JavaScript", icon: "/icon/javascript.svg" },
  typescript: { label: "TypeScript", icon: "/icon/typescript.svg" },
  zod: { label: "Zod", icon: "/icon/zod.svg" },
  react: { label: "React", icon: "/icon/react.svg" },
  reactHookForm: {
    label: "React Hook Form",
    icon: "/icon/react-hook-form.svg",
  },
  shadcnUi: { label: "Shadcn UI", icon: "/icon/shadcnui.svg" },
  tailwindCss: { label: "Tailwind CSS", icon: "/icon/tailwindcss.svg" },
  daisyUi: { label: "Daisy UI", icon: "/icon/daisyui.svg" },
  zustand: { label: "Zustand", icon: "/icon/zustand.svg" },
  vite: { label: "Vite", icon: "/icon/vite.svg" },
  antd: { label: "Ant Design", icon: "/icon/antd.svg" },
  vercel: { label: "Vercel", icon: "/icon/vercel.svg" },
  github: { label: "Github", icon: "/icon/github.svg" },
  git: { label: "Git", icon: "/icon/git.svg" },
  postman: { label: "Postman", icon: "/icon/postman.svg" },
  figma: { label: "Figma", icon: "/icon/figma.svg" },
};

export const projects = {
  lessonPlan: {
    link: {
      github: [
        "https://github.com/untitlez/my-server",
        "https://github.com/untitlez/my-client",
      ],
      demo: ["https://my-client-gamma.vercel.app"],
    },
    home: { src: "/projects/lesson-plan/home.png" },
    dark: { src: "/projects/lesson-plan/dark-mode.png" },
    light: { src: "/projects/lesson-plan/light-mode.png" },
    print: { src: "/projects/lesson-plan/print.png" },
    login: { src: "/projects/lesson-plan/login.png" },
    dashboard: { src: "/projects/lesson-plan/dashboard.png" },
    dashboard2: { src: "/projects/lesson-plan/dashboard2.png" },
  },
  hotelSystem: {
    link: {
      github: ["https://github.com/untitlez/Hotel-System"],
      demo: ["https://hotel-system-ecru.vercel.app"],
    },
    home: { src: "/projects/hotel-system/home.png" },
    dark: { src: "/projects/hotel-system/dark-mode.png" },
    light: { src: "/projects/hotel-system/light-mode.png" },
    login: { src: "/projects/hotel-system/login.png" },
    dashboard: { src: "/projects/hotel-system/dashboard.png" },
    profile: { src: "/projects/hotel-system/profile.png" },
  },
};
