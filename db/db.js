export const bio = [
  "Hello there &#128075;",
  "I'm Michael Schroeder, a Computer Engineer from George Mason University with expertise in Full Stack Engineering and Embedded Systems Design. I have a passion for all things tech and am a passionate developer.",
  "Apart from coding, I love to read, listen to music, and travel.",
  "As a lifelong learner, I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "Java, Javascript, C, C++, C#, Verilog, VHDL, Python",
    color: "1",
    percentage: "80",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "Angular, React, .ASP, jQuery",
    color: "6",
    percentage: "70",
  },
  {
    title: "Design",
    skillName: "HTML, Bootstrap, Tailwind",
    color: "4",
    percentage: "70",
  },
  {
    title: "Version Control",
    skillName: "GitHub, JIRA, Bitbucket",
    color: "7",
    percentage: "70",
  },
  {
    title: "Tools",
    skillName: "Amazon Web Services (EC2, Lambda, S3, CloudFormation, RDS), Git, Postman, Chrome DevTools",
    color: "3",
    percentage: "80",
  },
  {
    title: "Analytics",
    skillName: "CleverTap, Countly",
    color: "5",
    percentage: "50",
  },
  {
    title: "Editor",
    skillName: "VS Code",
    color: "6",
    percentage: "70",
  },
];

export const projects = {
  disclaimer:
    "*** All the projects I listed were completed during my college-level development journey. As for my work at the industry level, those projects are confidential and cannot be disclosed.",
  webProjects: [
    {
      projectName: "WasabiLingo",
      image: "images/wasabilingo.png",
      summary:
        "DDeveloped a custom-built game engine utilizing JavaScript and the Web Speech API for real-time speech recognition and feedback. Build a modern Frontend using advanced Javascript and CSS to create an intuitve educational platform.",
      preview: "https://wasabilingo.teachable.com/",
      techStack: ["Javascript", "AWS", "CSS", "Reactjs", "Heroku"],
    },
    {
      projectName: "Ad Hoc Wireless Network Emulation",
      image: "images/network.png",
      summary:
        "Developed software which emulates a wireless network through a graph data structure and calculates the network coverage depending on the user's criteria.",
      preview: "https://github.com/mls26155",
      techStack: ["Java", "Git", "Data Structures and Algorithms"],
    },
    {
      projectName: "Lofi Radio Weather App",
      image: "images/weather.png",
      summary:
        "A weather app built in React that plays lofi music to match the mood.",
      preview: "https://github.com/mls26155/Lofi-Weather-App",
      techStack: ["HTML", "Reactjs", "JavaScript"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "Wasabi Lingo",
    duration: "April 2023 - August 2023",
    subtitle: "Full Stack Web Developer Intern",
    details: [
      "Developed frontend and backend elements for an online Japanese language learning platform. Engineered a bespoke, custom game engine for real-time speech recognition for language learners."
    ],
    tags: ["JavaScript", "React", "CSS", "Nodejs", "HTML"],
    icon: "heartbeat",
  },
  {
    title: "Northern Virginia Community College",
    duration: "December 2021 - June 2022",
    subtitle: "Coding Club President",
    details: [
      "Led a 400+ member club, fostering a supportive and inclusive learning community.",
      "Conducted weekly Java programming workshops and mentored club members in programming techniques.",
      "Spearheaded and participated in hackathons, encouraging innovation and collaboration.",
    ],
    tags: ["Python", "Java"],
    icon: "qrcode",
  },
  {
    title: "Visual Artistry Co",
    duration: "September 2021 - Ocober 2022",
    subtitle: "Lead Videographer",
    details: [
      "Supervised associate photographers and videographers during high-profile wedding events as the Lead Videographer.",
      "Exhibited strong leadership and communication skills in liaising with clients and coordinating team efforts.",
    ],
    tags: ["Premiere Pro", "Lightroom", "After Effects", "Photoshop", "Illustrator"],
    icon: "group",
  },
];

export const education = [
  {
    title: "Bachelors of Science in Computer Engineering",
    duration: "",
    subtitle: "George Mason University, Virginia",
    details: [
      "President of the NVCC Coding Club",
      "Currently preparing for my senior design project through a study of FPGA Design in VHDL and Microcontroller programming.",
    ],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Embedded System Hardware Interfaces",
      "Computer Networks",
      "FGPA Design",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Associate of Science in Engineering",
    duration: "",
    subtitle: "Northern Virginia Community College, Virginia",
    details: [
      "Presidential Scholars List for Academic Excellence",
      "3.79/4.0 GPA",
    ],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "Stackoverflow",
        link: "https://github.com/mls26155",
      },
      {
        text: "GitHub",
        link: "https://github.com/mls26155",
      },
      {
        text: "LeetCode",
        link: "https://leetcode.com/mls26155/",
      },
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
      {
        text: "Clone this page",
        link: "",
      },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/michael-schroeder-020386283/",
      },
      {
        text: "Twitter",
        link: "",
      },
      {
        text: "More",
        link: "",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts;",
      "&copy; Copyright.",
    ],
  },
];

const gitUserName = "vinaysomawat";
const mediumUserName = "vinaysomawat";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
