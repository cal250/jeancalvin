import IMG8 from '../assets/css-tailwind.png';
import IMG5 from '../assets/ilead.png';
import IMG12 from '../assets/nihemart.png';
import IMG7 from '../assets/constraction.png';

import {
  BiLogoTypescript, 
 BiLogoReact,
   BiLogoAndroid
} from 'react-icons/bi';


import {
  SiCss3, SiTailwindcss,
  SiMaterialdesign, SiSqlite, SiVite, SiGithubpages, SiKotlin, SiJetpackcompose
} from 'react-icons/si';

const portfolioData = [
  {
    id: 3,
    image: IMG5,
    tecs: [<BiLogoReact key="react" />, <SiVite key="vite" />, <SiCss3 key="css3" />, <SiGithubpages key="githubpages" />],
    title: "Ilead",
    resume: `I developed this website you're exploring, along with all its interactive features.
        It was created using React + Vite, styled with CSS3, and deployed via GitHub Pages. 
        I focused on every detail to ensure a seamless user experience, while writing clean, readable code that adheres to best programming practices.
        The source code is open and available for anyone interested in creating a similar project`,
    github: "https://github.com/lamenkazu/portifolio",
    demo: "https://github.com/jemaf"
  },
  {
    id: 2,
    image: IMG8,
    tecs: [<BiLogoTypescript key="typescript" />, <SiTailwindcss key="tailwindcss" />],
    title: "I-Operate",
    resume: `I personary created this webpage to help people learn how efficiently use of their money,and i made it responsive 
    so that it can be used to target mobile customers plus desktop`,
    link: "https://css-frameworks-one.vercel.app/",
  },
  {
    id: 10,
    image: IMG12,
    tecs: [<BiLogoAndroid key="android" />, <SiJetpackcompose key="jetpackcompose" />, <SiSqlite key="sqlite" />],
    title: "Nihemart",
    resume: "This was the e-commerce that me with my team helped to re-design it ",
    link: "",
   
  },
  {
    id: 13,
    image: IMG7,
    tecs: [<BiLogoAndroid key="android" />, <SiKotlin key="kotlin" />, <SiMaterialdesign key="materialdesign" />,],
    title: "Aps-Portfolio",
    resume: `I recently designed and developed a dynamic website for Modern Construction Solutions, 
    a leading construction company specializing in residential and commercial projects. 
    The website features a clean, modern design with intuitive navigation and responsive layouts to ensure an optimal user experience across all devices. Key features include a comprehensive project portfolio, client testimonials, 
    and an interactive contact form to facilitate customer inquiries..`,
    link: "https://apsltd.netlify.app/",

  },
];

export default portfolioData;
