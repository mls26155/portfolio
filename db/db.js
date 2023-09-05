export const bio = [
  "Hello there &#128075;",
  "I'm Michael Schroeder, a Computer Engineer from George Mason University with expertise in Full Stack Engineering and Embedded Systems Design. I have a passion for all things tech and consider myself a curious and enthusiastic developer.",
  "My technical proficiencies include Java, Javascript, React, and agile methodologies, positioning me well for roles in software engineering, full-stack development, and hardware design. Whether it's front-end development using React or robust backend frameworks like .ASP, I approach every challenge with enthusiasm and a keen analytical mindset.",
  "Apart from coding, I love to photography, reading, and travel.",
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
    skillName: "React, .ASP, jQuery",
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
    skillName: "Amazon Web Services (EC2, Lambda, S3, CloudFormation, RDS), Git, Chrome DevTools, Docker, Kubernetes",
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
    "",
  webProjects: [
    {
      projectName: "WasabiLingo",
      image: "images/wasabilingo.png",
      summary:
        "Developed a custom-built game engine utilizing JavaScript and the Web Speech API for real-time speech recognition and feedback. Build a modern Frontend using advanced Javascript and CSS to create an intuitve educational platform.",
      preview: "https://wasabilingo.teachable.com/",
      techStack: ["Javascript", "WebSpeech API", "CSS", "HTML5", "Machine Learning Tooling"],
    },
    {
      projectName: "Ad Hoc Wireless Network Emulation using Graph Data Structures",
      image: "images/network.png",
      summary:
        "Developed software which emulates a wireless network through a graph data structure and calculates the network coverage depending on the user's criteria.",
      preview: "https://github.com/mls26155",
      techStack: ["Java", "Git", "Data Structures and Algorithms"],
    },
    {
      projectName: "Lofi Music Weather App",
      image: "images/weather.png",
      summary:
        "A weather app built in React that plays lofi music to match the mood..",
      preview: "https://github.com/mls26155/Lofi-Weather-App",
      techStack: ["HTML", "React", "JavaScript"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
      preview: "https://mls26155.github.io/portfolio/",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  androidProjects: [
    {
      projectName: "FPGA-based MIPS Datapath Design",
      image: "images/vhdl.jpg",
      summary:
        "Implemented MIPS datapath for R-type and I-type instructions on Basys-III board using VHDL code and Xilinx Vivado, ensuring compatibility with a diverse set of computing tasks. Managed input/output port mapping, bitstream file generation for FPGA programming, and efficient project
organization",
      preview: "https://github.com/mls26155",
      techStack: ["Vivado Xilinx", "FPGA", "VHDL", "Assembly"],
    },
    {
      projectName: "Custom Linux Device Driver",
      image: "images/driver.png",
      summary:
        "Developed a network driver for Linux, focusing on IP assignment, packet transmission, ARP with Ethernet, multicast configurations, and socket buffer manipulations",
      preview: "https://github.com/mls26155",
      techStack: ["C", "Linux Kernel", "Raspberry Pi"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "DanceFactory.com",
      image: "images/dancefactory.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.dancefactory.com/",
      techStack: ["Web Development", "Frontend Development", "UI/UX Design"],
    },
    {
      projectName: "TiptopFocus.com",
      image: "images/tiptopfocus.png",
      summary: "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview:
        "https://tiptopfocus.com",
      techStack: ["Web Development", "Javascript", "HTML5", "CSS"],
    },
  ],
};

export const experience = [
  {
    title: "Wasabi Lingo",
    duration: "April 2023 - August 2023",
    subtitle: "Software Engineer Intern",
    details: [
      "Worked in both Front-end and Back-end developement creating Japanese language learning software."
    ],
    tags: ["JavaScript", "CSS", "HTML5", "Nodejs", "Machine Learning Tooling"],
    icon: "heartbeat",
  },
  {
    title: "Northern Virginia Community College",
    duration: "December 2021 - June 2022",
    subtitle: "President of the NVCC Coding Club",
    details: [
      "Led a 400+ member club, fostering a supportive and inclusive learning community.",
      "Conducted weekly Java programming workshops and mentored club members in programming techniques.",
      "Spearheaded and participated in hackathons, encouraging innovation and collaboration.",
    ],
    tags: ["Java", "Mentoring", "Leadership"],
    icon: "qrcode",
  },
  {
    title: "Visual Artistry Co ",
    duration: "September 2021 - Ocober 2022",
    subtitle: "Lead Videographer",
    details: [
      "Supervised associate photographers and videographers during high-profile wedding events as the Lead Videographer.",
      "Exhibited strong leadership and communication skills in liaising with clients and coordinating team efforts.",
    ],
    tags: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Lightroom", "Adobe Photoshop"],
    icon: "group",
  },
];

export const education = [
  {
    title: "Bachelor of Science in Computer Engineering",
    duration: "",
    subtitle: "George Mason University, Virginia",
    details: [
      "I successfully qualified GATE-2020, demonstrating my aptitude and expertise in the field.",
      "As an active competitive programmer, I have achieved a CodeChef rating of 1841*, showcasing my skills in solving complex programming problems.",
      "My GitHub projects have earned over 1k stars and forks, a testament to my ability to create high-quality and impactful code.",
    ],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "FPGA Design",
      "Computer Networks",
      "Device Driver Development",
      "Computer Architecture",
      "Signals and Systems",
      "Embedded System Hardware Interfaces",
      "Microcontrollers"
    ],
    icon: "graduation-cap",
  },
  {
    title: "Associate of Science in Engineering",
    duration: "",
    subtitle: "Northern Virginia Community College",
    details: [
      "I have successfully qualified JEE Advanced, Main, and BITSAT, demonstrating my strong aptitude and skills in these highly competitive exams.",
      "Additionally, I am proud to have achieved an exceptional 99.5 percentile in my Class 12th Boards Examinations, reflecting my dedication and hard work towards academic excellence.",
    ],
    tags: ["Object Oritented Programming", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
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
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/michael-schroeder-020386283/",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "&copy; No Copyright.",
    ],
  },
];

const gitUserName = "michaelschroeder";
const mediumUserName = "michaelschroeder";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
