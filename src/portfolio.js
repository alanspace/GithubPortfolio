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
  animated: true // Set to false to use
  // static SVG
};

const greeting = {
  username: "Alan Leung",
  title: "Hi all, I'm Alan",
  subTitle: emoji(
    "A Quantum Engineer and CTO specializing in translating complex science and data into impactful software and ventures. ⚛️ 📈"
  ),
  // Use your "Venture Builder" CV as it is the most comprehensive.
  resumeLink:
    "https://drive.google.com/file/d/1QdPPIkT8g7CAfRJaWLNGJXsQscP_N7o3/view?usp=share_link",
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
  display: true,
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
      skillName: "Google",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Royal Institute of Technology (KTH)",
      logo: require("./assets/images/KTH.png"), // You will need to find and add a KTH logo to this folder
      subHeader:
        "Master of Science in Engineering Physics (Quantum Technology)",
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
  title: "Quantum Related Projects",
  subtitle:
    "Here are some of my projects that showcase my skills and knowledge in Quantum Computing and related fields.",
  projects: [
    {
      image: require("./assets/images/Ericsson.png"),
      projectName:
        "Master Thesis Project at Ericsson AB - Communication and Error Correction via Polarisation of Single Photons and Time_Ordering",
      projectDesc:
        "This repository contains the Python code, simulations, and analysis for the Master's thesis. The research investigates the information-carrying capacity of single photons and proposes a novel protocol named Beyond Pulse Position Modulation (BPPM).",
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
      projectName:
        "Master Student Project at NQCIS - Machine Learning for Quantum Key Distribution Network Optimization",
      projectDesc:
        "This repository contains the code and analysis for the project, which investigates the use of neural networks (NNs) to accelerate the parameter optimization of decoy-state BB84 QKD systems.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/QKD_KeyRate_Parameter_Optimization"
        }
      ]
    },
    {
      image: require("./assets/images/QuantumErrorCorrection.png"),
      projectName: "Quantum Error Correction with Google AI Quantum",
      projectDesc:
        "This repository contains a hands-on programming lab designed to construct, visualize, and simulate the surface code for quantum error correction using Google's high-performance quantum circuit simulator, Stim.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/Quantum_Error_Correction"
        }
      ]
    },
    {
      image: require("./assets/images/PostQuantumCryptography.png"),
      projectName: "Post-Quantum Key Exchange: A Kyber (ML-KEM) Simulation ",
      projectDesc:
        "This repository contains a Python script that simulates and explains the Kyber (ML-KEM) algorithm, the primary post-quantum key exchange mechanism selected for standardization by NIST.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/Post_Quantum_Cryptographty"
        }
      ]
    },

    {
      image:
        "https://github.com/QTechnocrats/covid19-detection-chest-xray-dataset/blob/main/images/xray_example.jpeg?raw=true",
      projectName:
        "Analysis, Prediction and Evaluation of Covid-19 Datasets using Quanvolutional Neural Network",
      projectDesc:
        "This project uses a Quanvolutional Neural Network to analyze, predict, and evaluate COVID-19 from chest X-ray image datasets. The approach involves preprocessing the images, applying a multi-layered Quanvolutional network, and using a two-model classifier to distinguish between 'Normal', 'COVID-19', and 'Viral Pneumonia' cases.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/QHACK_Quantum-Classification-of-CT-Scan-on-Diagnosis-COVID-19"
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
      title:
        "IBM Qiskit Community Award Winner IBM Qiskit Hackathon Global 2020",
      subtitle:
        "Quantum Orchestra - A Quantum Computing Application for Music Generation",
      image: require("./assets/images/Qiskit_Community_Award.png"),
      imageAlt: "Qiskit Community Award",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NyDu1ng0ra_R0kxZNzIiDKdg4YKUvuI8/view?usp=share_link"
        },
        {
          name: "Visit My Repository",
          url: "https://github.com/alanspace/quantum_orchestra"
        },
        {
          name: "Read My Blog",
          url: "https://alanblogspace.blogspot.com/2020/10/ibm-qiskit-hackathon-global-community.html"
        }
      ]
    },
    {
      title:
        "International Physics Tournament 2022 - Win the National Selection in a Team",
      subtitle:
        "This repository contains the pdf file, Python simulation script, and final report for the research paper:High-Precision Experimental Determination and Theoretical Modeling of the Feigenbaum Constant in a Driven Nonlinear R-L-D Oscillator.",
      image: require("./assets/images/circuit.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "View My Repository",
          url: "https://github.com/alanspace/IPT"
        }
      ]
    },

    {
      title: "IBM Qiskit Badges of Engagement",
      subtitle:
        "Qiskit Advocate, IBM Quantum Challenge - Fall 2020, IBM Certified Associate Developer -Quantum Computation using Qiskit v0.2X, Qiskit Localization Contributor -Platnum Level Translator - 2021",
      image: require("./assets/images/QiskitAdvocate.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View All my Badges",
          url: "https://www.credly.com/users/shek-lun-leung/badges#credly"
        }
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
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
      url: "https://alanblogspace.blogspot.com/p/quantum-computing.html",
      title: "My Blogs on Quantum Computing",
      description:
        "Vehicles, Artificial Intelligence (AI) and Quantum Computing (QC), Theory and Quantum Computing, Photonic Quantum Computer, Quantum Spatial Search Algorithm on Random Temporal Network, Quantum Search, Quantum Cryptography and Quantum Sensing, Computational Physics, Quantum Optics and Photonics, Nanotechnology, Quantum Internet of Thing (IoT), Quantum Error Correction, Quantum Machine Learning, Quantum Simulation, Quantum Sensing, My little sharing on the IBM Qiskit Global Summer School and the Advocate Test (+ event promotion, About the Advocate Application and My contribution to the Qiskit Community, The Journey from learning Quantum Mechanics to becoming a Qiskit Advocate, What kind of job I should pursue Quantum Computing"
    },
    {
      url: "https://alanblogspace.blogspot.com/p/physics.html",
      title: "My Blogs on Physics",
      description:
        "Quantum Mechanics: Phase Velocity Vs Group velocity: Wave Dispersion, Albert Einstein's Birthday, Photoelectric Effect, Electric Field of the Metal Plates, VPython for Physics Episode, IB Physics Syllabus, Key Education Leader Physics Lesson Notes and more"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Professional Developement",
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO SHARE ABOUT TECHNOLOGY AND IT IS HOW I LEARN",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.youtube.com/playlist?list=PLxEqgXoTj7i6_tN5G2I0IWpj0Stw2v1QH"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume_Shek_Lun_Leung",
  subtitle: "Feel free to download my resume",
  resumeLink:
    "https://drive.google.com/file/d/1QdPPIkT8g7CAfRJaWLNGJXsQscP_N7o3/view?usp=share_link",
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
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
