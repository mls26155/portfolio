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
    title: "Biofourmis India Pvt. Ltd.",
    duration: "April 2022 - Present",
    subtitle: "Software Engineer",
    details: [
      "Currently involved in developing healthcare and digital therapeutics products."
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "heartbeat",
  },
  {
    title: "Novopay Solutions Pvt. Ltd.",
    duration: "June 2020 - April 2022",
    subtitle: "Software Engineer",
    details: [
      "Successfully implemented Aadhaar Enabled Payment services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements, and Money Transfer, achieving more than 20 story points in each sprint.",
      "Streamlined the process of loading money into the wallet by integrating QR Code, which reduced the time required by 50%. Also implemented Clevertap events to track user actions, Freshdesk ticketing service, and chat-bot services. Contributed to user onboarding, approval, and finance interfaces.",
      "Collaborated closely with cross-functional teams such as product, backend, android, and QA, ensuring timely delivery of product builds to meet deadlines",
    ],
    tags: ["JavaScript", "Angular", "React", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "qrcode",
  },
  {
    title: "ThinkPedia LLP",
    duration: "May 2019 - June 2019",
    subtitle: "SDE Intern",
    details: [
      "Contributed as a full-stack developer to provide technical support to the team",
      "Designed and developed a comprehensive Web Application for social media management, starting from the ground up, to cater to customer needs.",
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
    icon: "group",
  },
];

export const education = [
  {
    title: "Bachelors in Computer Science and Engineering",
    duration: "",
    subtitle: "National Institute of Technology, Warangal",
    details: [
      "I successfully qualified GATE-2020, demonstrating my aptitude and expertise in the field.",
      "As an active competitive programmer, I have achieved a CodeChef rating of 1841*, showcasing my skills in solving complex programming problems.",
      "My GitHub projects have earned over 1k stars and forks, a testament to my ability to create high-quality and impactful code.",
    ],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Class 11-12th in Science and Mathematics",
    duration: "",
    subtitle: "Board of Secondary Education, Rajasthan",
    details: [
      "I have successfully qualified JEE Advanced, Main, and BITSAT, demonstrating my strong aptitude and skills in these highly competitive exams.",
      "Additionally, I am proud to have achieved an exceptional 99.5 percentile in my Class 12th Boards Examinations, reflecting my dedication and hard work towards academic excellence.",
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
        link: "https://stackoverflow.com/users/8461233/vinay-somawat",
      },
      {
        text: "GitHub",
        link: "https://github.com/vinaysomawat",
      },
      {
        text: "LeetCode",
        link: "https://leetcode.com/somawatvinay/",
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
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/vinaysomawat/",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/thesigmakid",
      },
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];

const gitUserName = "vinaysomawat";
const mediumUserName = "vinaysomawat";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
