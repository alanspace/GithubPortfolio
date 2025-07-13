/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alan Leung",
  title: "Hi all, I'm Alan",
  subTitle: emoji(
    "A Quantum Engineer and CTO specializing in translating complex science and data into impactful software and ventures. ⚛️ 📈"
  ),
  // Use your "Venture Builder" CV as it is the most comprehensive.
resumeLink: "/cv-entrepreneur-shek-lun-leung.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/alanspace",
  linkedin: "https://www.linkedin.com/in/shek-lun-leung-alan/",
  gmail: "mail.alnaleung@gmail.com",
  // If you have a blog or portfolio site, add them here.
  // Medium: "https://medium.com/@your_username",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "BRIDGING THE GAP BETWEEN DEEP TECH AND PRACTICAL APPLICATION",
  skills: [
    emoji(
      "⚡ Building and implementing advanced mathematical and statistical models for predictive analytics and simulation."
    ),
    emoji(
      "⚡ Developing robust software for complex physical systems in Quantum Computing, Optics, and AI."
    ),
    emoji(
      "⚡ Leading the full technology lifecycle for deep tech ventures, from research and prototyping to commercial deployment."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

 // This list screams "Deep Tech & Data Expert"
softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PyTorch / TensorFlow", // Highlights your AI/ML expertise
      fontAwesomeClassname: "fas fa-brain" 
    },
    {
      skillName: "Quantum Computing", // Represents your entire quantum stack (Qiskit, etc.)
      fontAwesomeClassname: "fas fa-atom"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
],
};
// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Royal Institute of Technology (KTH)",
      logo: require("./assets/images/KTH.png"), // You will need to find and add a KTH logo to this folder
      subHeader: "Master of Science in Engineering Physics (Quantum Technology)",
      duration: "Present - Expected 2026",
      desc: "Key Coursework: Advanced Quantum Mechanics, Quantum Information & Algorithms, Quantum Photonics & Entanglement."
      // descBullets are optional if desc is enough
    },
    {
      schoolName: "The Chinese University of Hong Kong",
      logo: require("./assets/images/CUHK.png"), // Find and add CUHK logo
      subHeader: "Master of Science in Physics (Honor)",
      duration: "Completed 2018",
      desc: "Focused on [mention a key focus or achievement from your M.S.]."
    }
    // Add your other degrees here if you wish, but these two are the most important.
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Chief Technology Officer and Co-founder",
      company: "Metvibee",
      companylogo: require("./assets/images/metvibee.jpeg"),
      date: "2023 – 2024",
      desc: "Co-founded a deep tech venture, leading the technology strategy and product development from concept to a commercially viable prototype.",
      descBullets: [
        "Drove the end-to-end technology lifecycle, from research and prototyping to commercial deployment.",
        "Implemented advanced mathematical and statistical models for predictive analytics and simulation."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Academic Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Ericsson.png"),
      projectName: "Master Thesis Project at Ericsson AB - Communication and Error Correction via Polarisation of Single Photons and Time_Ordering",
      projectDesc: "This repository contains the Python code, simulations, and analysis for the Master's thesis. The research investigates the information-carrying capacity of single photons and proposes a novel protocol named Beyond Pulse Position Modulation (BPPM).",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/Communication_and_Error_Correction_via_Polarisation_of_Single_Photons_and_Time_Ordering"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/NQCIS.png"),
      projectName: "Master Student Project at NQCIS - Machine Learning for Quantum Key Distribution Network Optimization",
      projectDesc: "This repository contains the code and analysis for the project, which investigates the use of neural networks (NNs) to accelerate the parameter optimization of decoy-state BB84 QKD systems.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/QKD_KeyRate_Parameter_Optimization"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IBM Qiskit Community Award Winner IBM Qiskit Hackathon Global 2020",
      subtitle:
        ".",
      image: require("./assets/images/Qiskit_Community_Award.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NyDu1ng0ra_R0kxZNzIiDKdg4YKUvuI8/view?usp=share_link"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "My Blog",
          url: "https://alanblogspace.blogspot.com/2020/10/ibm-qiskit-hackathon-global-community.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a business, a project or just want to say hi? My Inbox is open for all.",
  email_address: "mail.alanleung@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};