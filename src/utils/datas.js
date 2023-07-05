// Stack Icons
import htmlIcon from "@icons/html.svg";
import cssIcon from "@icons/css.svg";
import jsIcon from "@icons/js.svg";
import javaIcon from "@icons/java.svg";
import pythonIcon from "@icons/python.svg";
import tailwindIcon from "@icons/tailwind.svg";
import nextjsIcon from "@icons/nextjs.svg";
import nodejsIcon from "@icons/nodejs.svg";
import npmIcon from "@icons/npm.svg";
import yarnIcon from "@icons/yarn.svg";
import dockerIcon from "@icons/docker.svg";
import gitIcon from "@icons/git.svg";
import githubIcon from "@icons/github.svg";
import mysqlIcon from "@icons/mysql.svg";
import photoshopIcon from "@icons/photoshop.svg";
import airflowIcon from "@icons/airflow.svg";
import vscodeIcon from "@icons/vscode.svg";
import discordIcon from "@icons/discord.svg";
import jupyterIcon from "@icons/jupyter.svg";
import premiereproIcon from "@icons/premiere-pro.svg";
import tableauIcon from "@icons/tableau.svg";
import sparkIcon from "@icons/Apache_Spark.svg";

// Project Images
import de from "@images/de1.jpg";
import de1 from "@images/de.jpg"; 
import rose from "@images/rose.webp"; 
import dawp from "@images/Dawp.png";
import abinawa from "@images/abinawa.webp";
import card_hover from "@images/card_hover.png";
import renal_port from "@images/renal_port.png";
import footer from "@images/footer.png";
import valobutton from "@images/valorant-button.png";
import web_react from "@images/web-react.png";
import parallax from "@images/parallax.png";

// Gif Images
import valobuttonGIF from "@gif/valorant-clone-button.gif";
import renal_portGif from "@gif/renal_port.gif";
import parallaxGif from "@gif/parallax.gif";
import footerGif from "@gif/footer.gif";
import card_hoverGif from "@gif/card_hover.gif";
import abinawaGif from "@gif/abinawa.gif";

const tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  Yarn: { name: "Yarn", src: yarnIcon, level: "Dependency tool" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
  Jupyter: { name: "Jupyter Lab", src: jupyterIcon, level: "Notebook" },
  Spark: { name: "Spark", src: sparkIcon, level: "Data Framework" },
  Tableau: { name: "Tableau", src: tableauIcon, level: "Data Visual" },
  Docker: { name: "Docker", src: dockerIcon, level: "OS Containers" },
  Airflow: { name: "Airflow", src: airflowIcon, level: "ETL tool" },
  Photoshop: { name: "Photoshop", src: photoshopIcon, level: "Image editor" },
  PremierePro: { name: "Premiere Pro", src: premiereproIcon, level: "Video editor" },
  Discord: { name: "Discord", src: discordIcon, level: "Meeting" },
};

const stacks = {
  MySQL: { name: "MySQL", src: mysqlIcon, level: "Intermediate" },
  Python: { name: "Python", src: pythonIcon, level: "Beginner" },
  Java: { name: "Java", src: javaIcon, level: "Beginner" },
  HTML: { name: "HTML", src: htmlIcon, level: "Beginner" },
  CSS: { name: "CSS", src: cssIcon, level: "Beginner" },
  JS: { name: "Javascript", src: jsIcon, level: "Beginner" },
  Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Beginner" },
  NextJS: { name: "NextJS", src: nextjsIcon, level: "Beginner" },
  NodeJS: { name: "NodeJS", src: nodejsIcon, level: "Beginner" },
};

const projects = [
  {
    id: 1,
    name: "Data Analyst",
    desc: "My first project was created using Python.",
    image: rose,
    web: "",
    repo: "https://github.com/renal-d",
    stack: "Python, MySQL, Tableau",
    gif: "",
  },
  {
    id: 2,
    name: "Visualization Data",
    desc: "This website serves as a platform to showcase hidden tourism spots in Bali, Indonesia. In addition to featuring these hidden gems.",
    image: de1,
    web: "",
    repo: "https://github.com/renal-d",
    stack: "MySQL, Tableau, Python, Powerpoint",
    gif: "",
  },
  {
    id: 3,
    name: "Data Engineer with Python",
    desc: "proccessing big data with Python to visual ",
    image: de,
    web: "",
    repo: "https://github.com/renal-d",
    stack: "PySpark, Python, MySQL, Airflow",
    gif: "",
  },
  {
    id: 4,
    name: "Data Analyst",
    desc: "analisis data",
    image: dawp,
    web: "",
    repo: "https://github.com/renal-d",
    stack: "MySQL, Python, Tableau",
    gif: "",
  },
  {
    id: 5,
    name: "Nareswari",
    desc: "This website is designed as a digital learning tool to introduce the art of wayang kulit to the public. The website features interactive 3D models of wayang kulit.",
    image: abinawa,
    web: "https://renaldidwi.vercel.app/",
    repo: "https://github.com/renal-d",
    stack: "Vite, React, React-spline, React-router, TailwindCSS",
    gif: abinawaGif,
  },
  {
    id: 6,
    name: "Card Hover",
    desc: "The purpose of this platform is to provide students with a medium to share information about the latest events or news happening in the UMS community.",
    image: card_hover,
    web: "https://github.com/renal-d",
    repo: "https://github.com/renal-d",
    stack: "HTML, CSS",
    gif: card_hoverGif,
  },
  {
    id: 7,
    name: "Parallax-Website",
    desc: "Welcome to Notes app! With this app, you can create, edit, delete and organize your notes. You can also sign up and log in to access your notes. This app I made for complete the Dicoding React Fundamental course.",
    image: parallax,
    web: "https://renaldidwi.vercel.app/",
    repo: "https://github.com/renal-d",
    stack: "HTML, CSS, Javascript",
    gif: parallaxGif,
  },
  {
    id: 8,
    name: "Portfolio",
    desc: "My first personal portfolio!! I designed it by combining different ideas from various sources. It also has a secret game that you can play on your desktop. Can you find it?",
    image: web_react,
    web: "https://renaldidwi.vercel.app/",
    repo: "https://github.com/renal-d",
    stack: "NextJS, TailwindCSS, ThreeJS, React-spline",
    gif: renal_portGif,
  },
  {
    id: 9,
    name: "footer",
    desc: "Trying to slice from Figma correctly to create a responsive website, and actually, it is already very good for being responsive (can be checked through inspect), but sometimes on certain screens, the margin is not read properly.",
    image: footer,
    web: "https://renaldidwi.vercel.app/",
    repo: "https://github.com/renal-d",
    stack: "HTML, CSS",
    gif: footerGif,
  },
  {
    id: 10,
    name: "Valorant Button",
    desc: "Interactive valorant clone button, i change the color to blue and gold!",
    image: valobutton,
    web: "https://renal-d.github.io/valorant-button/",
    repo: "https://github.com/renal-d/valorant-button",
    stack: "HTML, CSS",
    gif: valobuttonGIF,
  },
  {
    id: 11,
    name: "Portfolio Website",
    desc: "This website provides information about various meals and how to cook them 🍴, using the API from TheMealDB. I created this website to complete the Dicoding Front End Fundamental course.",
    image: renal_port,
    web: "https://renaldidwi.vercel.app/",
    repo: "https://github.com/renal-d/renal-d.github.io",
    stack: "NextJS, TailwindCSS, ThreeJS, React-spline",
    gif: renal_portGif,
  },
];

export { tools, stacks, projects };
