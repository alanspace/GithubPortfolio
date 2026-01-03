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
  username: "Shek Lun Leung (Alan)",
  title: "Hi there, I'm Alan",
  subTitle: emoji(
    "Master of Science in Engineering Physics (Quantum Technology) @ KTH | AI Researcher | Technical Director. Bridging the gap between theoretical physics, machine learning agents, and scalable software systems."
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
  gmail: "sheklunleung.qai@proton.me",
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
      "⚡ Optimizing complex systems—from accelerating Quantum Key Distribution (QKD) speeds by 270x to architecting optical Ising machines."
    ),
    emoji(
      "⚡ Building autonomous agents and investigating the simulation-reality gap in AI Safety."
    ),
    emoji(
      "⚡ Expertise in High-Performance ML (JAX/PyTorch), Quantum Information, and nonlinear dynamics."
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
      skillName: "JAX / PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Quantum Computing (Qiskit)",
      fontAwesomeClassname: "fas fa-atom"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Google Gemini",
      fontAwesomeClassname: "fab fa-google"
    }
  ]
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Royal Institute of Technology (KTH)",
      logo: require("./assets/images/KTH.png"),
      subHeader:
        "Master of Science in Engineering Physics (Quantum Technology)",
      duration: "Present - Expected 2026",
      desc: "Specializing in High-Performance ML (JAX/PyTorch), Quantum Information, and AI Safety.",
      descBullets: [
        "Advanced Quantum Mechanics (SI2380), Quantum Information (SH2381), Quantum Photonics (SK2450)",
        "Artificial Intelligence in Society (DM2585), Programming Techniques II (C++/Unix) (DA4007)",
        "Mathematical Methods in Physics (FK7048), Numerical Analysis II (FEM/FDM) (DA5001)",
        "Research Methodology: Scientific Assessment & Communicating Nobel-prize winning work."
      ]
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
      role: "Technical Director",
      company: "DreamToDone",
      companylogo: require("./assets/images/metvibee.jpeg"), // Need logo, using placeholder
      date: "Oct 2025 – Present",
      desc: "Architecting an AI reasoning ecosystem or creative workflows. Finalist for the KTH Innovation/SSE pitch competition."
    },
    {
      role: "Technical Lead (Hackathon)",
      company: "Grant Seeker AI",
      companylogo: require("./assets/images/metvibee.jpeg"), // Need logo, using placeholder
      date: "Oct 2025 – Present",
      desc: "Designed a multi-agent ecosystem using Google ADK & Gemini Flash. Implemented sequential orchestration for automated proposal generation."
    },
    {
      role: "Chief Technology Officer and Co-founder",
      company: "Metvibee",
      companylogo: require("./assets/images/metvibee.jpeg"),
      date: "2023 – 2024",
      desc: "Co-founded a deep tech venture, leading the technology strategy and AR prototype development for urban planning.",
      descBullets: [
        "Led technology strategy and AR prototype development for urban planning.",
        "Managed full-stack R&D and stakeholder technical demonstrations."
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
    "Here are some of my projects that showcase my skills and knowledge in Quantum Technology and related fields.",
  projects: [
    {
      image: require("./assets/images/circuit.png"), // Placeholder for Photonic Ising
      projectName: "Photonic Ising Machine",
      projectDesc:
        "Architected an optical Ising machine using Spatial Light Modulation (SLM) to solve NP-hard combinatorial optimization problems. Implemented using Python, Opics, and Optimization algorithms.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/Photonic_Computing"
        }
      ]
    },
    {
      image: require("./assets/images/NQCIS.png"),
      projectName: "ML for QKD Optimization",
      projectDesc:
        "Designed a hybrid JAX/PyTorch pipeline for real-time parameter prediction in quantum networks, achieving a ~270x speedup across 6,000 scenarios. Investigates Neural Networks for decoy-state BB84 QKD systems.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/QKD_KeyRate_Parameter_Optimization"
        }
      ]
    },
    {
      image: require("./assets/images/gradcam_comparison.png"), // Placeholder for AI
      projectName: "Autonomy in AI: Subjectivity",
      projectDesc:
        "Investigated the simulation-reality gap in LLM-powered humanoid robots and proposed accountability frameworks for autonomous agents. Focuses on AI Safety and LLMs.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/Autonomy-in-AI-Research"
        }
      ]
    },
    {
      image: require("./assets/images/circuit.png"), // Placeholder
      projectName: "Nonlinear Dynamics & Chaos",
      projectDesc:
        "First-principles derivation of nonlinear ODEs and automated measurement of the Feigenbaum constant (δ = 4.67 ± 0.08).",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/nonlinear-dynamics-chaos"
        }
      ]
    },
    {
      image: require("./assets/images/Ericsson.png"),
      projectName: "Master Thesis: Secure Comm (Ericsson AB)",
      projectDesc:
        "Analyzed Beyond Pulse Position Modulation (BPPM) for energy-efficient security, proving superior information density via large-scale simulations. Investigated information-carrying capacity of single photons.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/Communication_and_Error_Correction_via_Polarisation_of_Single_Photons_and_Time_Ordering"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const smallProjects = {
  title: "AI Related Projects",
  subtitle:
    "Here are some of my projects that showcase my skills and knowledge in artificial intelligence and related fields.",
  projects: [
    {
      image: require("./assets/images/gradcam_comparison.png"),
      projectName:
        "Interpretability in Deep Learning A Grad CAM Analysis of CNNs",
      projectDesc:
        "This project explores and compares two CNN architectures for classifying vegetable images (cucumbers, eggplants, mushrooms): a custom-built model and a fine-tuned ResNet18. Utilizing Grad-CAM, I visualize and interpret their internal decision-making processes, demonstrating the superior performance and interpretability of transfer learning with state-of-the-art models like ResNet18 over a custom baseline.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/Interpretability-in-Deep-Learning-A-Grad-CAM-Analysis-of-CNNs"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/segmentation_prediction_result.png"),
      projectName:
        "Road Segmentation with U-Net and PyTorch",
      projectDesc:
        "PyTorch implementation of a U-Net model for high-resolution road segmentation from aerial imagery. Leveraging `segmentation_models_pytorch` with a pre-trained `efficientnet-b0` encoder and `albumentations` for data augmentation, this project achieves robust semantic segmentation on the Massachusetts Roads Dataset. Features a complete training pipeline, custom dataset handling, and clear inference example.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/Road-Segmentation-with-U-Net-and-PyTorch"
        }
      ]
    },
    {
      image: require("./assets/images/weather_prediction.jpeg"),
      projectName: "Predicting Weather with Neural Networks",
      projectDesc:
        "This repository contains a complete, end-to-end data science project focused on predicting whether it will rain the next day in Perth, Australia. It utilizes a neural network (Multi-layer Perceptron) and demonstrates a robust, best-practice machine learning workflow from data cleaning and feature engineering to model optimization and real-world application.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/Predicting_Weather_with_Neural_Networks/tree/main"
        }
      ]
    },
    {
      image: require("./assets/images/Energy_Sector.png"),
      projectName: "Algorithmic Trading Analysis Toolkit",
      projectDesc:
        "A comprehensive toolkit for quantitative analysis, sentiment analysis, and algorithmic trading strategies. Features include technical analysis, NLP-based sentiment analysis, portfolio optimization (maximizing Sharpe Ratio), LSTM-based price predictions, risk analysis via PCA, and strategy backtesting.",
      footerLink: [
        {
          name: "Visit Github Repository",
          url: "https://github.com/alanspace/Algorithm_Trading"
        }
      ]
    },


    // {
    //   image:
    //     "https://github.com/QTechnocrats/covid19-detection-chest-xray-dataset/blob/main/images/xray_example.jpeg?raw=true",
    //   projectName:
    //     "Analysis, Prediction and Evaluation of Covid-19 Datasets using Quanvolutional Neural Network",
    //   projectDesc:
    //     "This project uses a Quanvolutional Neural Network to analyze, predict, and evaluate COVID-19 from chest X-ray image datasets. The approach involves preprocessing the images, applying a multi-layered Quanvolutional network, and using a two-model classifier to distinguish between 'Normal', 'COVID-19', and 'Viral Pneumonia' cases.",
    //   footerLink: [
    //     {
    //       name: "Visit Github Repository",
    //       url: "https://github.com/alanspace/QHACK_Quantum-Classification-of-CT-Scan-on-Diagnosis-COVID-19"
    //     }
    //   ]
    // }, 
    // {
    //   image: require("./assets/images/qpong_p8_0.gif"),
    //   projectName: "Q Pong with Raspberry Pi",
    //   projectDesc:
    //     "Ever wished for a personal quantum computer? We made it happen! This project details how to turn a Retro Pi into a simulated quantum computer for playing QPong, a PICO-8 game. You can delve into QPong online and view the project's GitHub.",
    //   footerLink: [
    //     {
    //       name: "Visit Github Repository",
    //       url: "https://github.com/alanspace/QPong_RaspberryPi"
    //     }
    //   ]
    // }
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
      title: "VCQ & TURIS Summer School (2024) - Vienna, Austria",
      subtitle:
        "Advanced training in Quantum Information, General Relativity, Quantum Algorithms, and Quantum Gravity.",
      image: require("./assets/images/KTH.png"), // Placeholder or use a generic 'education/science' icon if available
      imageAlt: "VCQ Vienna",
      footerLink: []
    },
    {
      title: "Minato Summer School (2024) - Toulouse, France",
      subtitle:
        "Training in Microelectronics, Nanochemistry, and Advanced Fabrication Techniques for Quantum Devices.",
      image: require("./assets/images/KTH.png"),
      imageAlt: "Minato",
      footerLink: []
    },
    {
      title: "7th Superconductivity Summer School (2022) - Oxford, UK",
      subtitle:
        "Fundamentals of Superconductivity, Applications in Quantum Computing, Materials, and Measurements.",
      image: require("./assets/images/KTH.png"),
      imageAlt: "Oxford",
      footerLink: []
    },
    {
      title: "IBM Qiskit Global Hackathon (2020) - Winner",
      subtitle:
        "Awarded 'Community Choice' for Quantum Orchestra - A Quantum Computing Application for Music Generation.",
      image: require("./assets/images/Qiskit_Community_Award.png"),
      imageAlt: "Qiskit Community Award",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1NyDu1ng0ra_R0kxZNzIiDKdg4YKUvuI8/view?usp=share_link"
        },
        {
          name: "Visit Repository",
          url: "https://github.com/alanspace/quantum_orchestra"
        }
      ]
    },
    {
      title: "International Physicists' Tournament 2022 - National Winner",
      subtitle:
        "First-principles derivation and experimental determination of the Feigenbaum Constant.",
      image: require("./assets/images/circuit.png"),
      imageAlt: "IPT 2022",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/alanspace/IPT"
        }
      ]
    },
    {
      title: "IBM Qiskit Engagement & Certification",
      subtitle:
        "Qiskit Advocate, Certified Associate Developer (v0.2X), Platinum Level Translator.",
      image: require("./assets/images/QiskitAdvocate.png"),
      imageAlt: "Qiskit Badges",
      footerLink: [
        {
          name: "View Badges",
          url: "https://www.credly.com/users/shek-lun-leung/badges#credly"
        }
      ]
    },
    {
      title: "QAMP 2025 Mentee",
      subtitle: "Selected for Quantum Certification Tutorial Development mentorship.",
      image: require("./assets/images/QiskitAdvocate.png"), // Using placeholder
      imageAlt: "QAMP",
      footerLink: []
    },
    {
      title: "Technical Mentor - Qiskit Hackathon Taiwan (2021)",
      subtitle: "Mentored teams on quantum computing projects.",
      image: require("./assets/images/QiskitAdvocate.png"), // Using placeholder
      imageAlt: "Mentor",
      footerLink: []
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
  email_address: "sheklunleung.qai@proton.me"
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
  smallProjects,
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
