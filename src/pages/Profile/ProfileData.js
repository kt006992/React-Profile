// ProfileData.js - 存储Profile页面所有文本内容的组件

export const profileData = {
  personal: {
    name: "Runtian(Tim)",
    location: "Perth, Western Australia",
    email: "klaytime31@gmail.com",
    linkedin: "https://www.linkedin.com/in/runtian-liang-mpe-sde",
    github: "https://github.com/kt006992",
    profileImage: "/images/Selfie.jpg",
    resume: "/resume/RTL_Resume.pdf"
  },

  hero: {
    greeting: "Hello, I am Runtian(Tim),",
    title: "a Graduated Software Engineer (From Bachelor to Master)",
    subtitle: "That Looking for",
    highlight: "Work Opportunity",
    description: "Can work as: Full-stack Developer | Software Engineer | Data Analyst | IT Technician | Game Developer | Data Engineer"
  },


  about: {
    icon: "🎯",
    title: "About Me",
    content: "Passionate software engineer with experience in full-stack development, data analysis & visualization, and system design. Always eager to learn new technologies and solve challenging problems."
  },

  skills: {
    icon: "🛠️",
    title: "Skills",
    categories: {
      programmingLanguages: {
        label: "Programming Language",
        items: "JavaScript, TypeScript, Python, C++, C#, R, MATLAB, SQL, Shell, Bash."
      },
      frameworks: {
        label: "Frameworks/Libraries",
        items: "React, Node.js, Next.js, Vue, Flask, Vite, React Native, .Net, Spring Boot."
      },
      devops: {
        label: "DevOps/Tools",
        items: "Vercel, Docker, AWS, GitHub Actions, ngrok, Azure, Google Cloud, Figma."
      },
      databases: {
        label: "Databases",
        items: "Supabase, Prisma, MongoDB, Firebase, PostgreSQL, MySQL."
      },
      others: {
        label: "Others",
        items: "RESTful API, JWT Auth, JUnit, Agile, Microsoft, Jira."
      }
    }
  },

  buttons: {
    seeResume: "See my resume",
    goToLinkedin: "Go to Linkedin",
    myGithub: "My GitHub",
    connect: "Connect",
    downloadResume: "📥 Download Resume"
  },

  modal: {
    resumeTitle: "My Resume",
    closeButton: "✕",
    downloadFilename: "Runtian_Liang_Resume.pdf"
  },

  icons: {
    location: "📍",
    about: "🎯",
    skills: "🛠️"
  },

  email: {
    subject: "Connection Request from Your Portfolio",
    bodyTemplate: `<example>Hi Runtian,

I visited your portfolio website and would like to connect with you.

Best regards,
[Your Name]`
  }
};


export default profileData;