import { AiOutlineFieldTime } from "react-icons/ai";
import { PiProjectorScreenThin } from "react-icons/pi";
import { MdOutlineLanguage } from "react-icons/md";
import dayjs from "dayjs";

const start = dayjs('2023/09/31');
const end = dayjs();

const monthDiff = end.diff(start, 'month');
const yearDiff = end.diff(start, 'year');

const timeInWork = `${monthDiff >= 12 ? 
                    (yearDiff > 1 ? `In the last ${yearDiff} years` : `In the last year`) :
                    `In the last ${monthDiff} months`}`;


export const aboutCardData = [
    {
        id: 1,
        icon: <AiOutlineFieldTime className='about__icon' />,
        title: "Academic",
        small: "18h in IT per Day",
    },
    {
        id: 2,
        icon: <MdOutlineLanguage className='about__icon' />,
        title: "English",
        small: "Level A",
    },
    {
        id: 3,
        icon: <PiProjectorScreenThin className='about__icon' />,
        title: "Projects",
        small: "08+ projects",
    }
];

export const aboutTextData = [
    {
        id: 1,
        text: `I am currently studying at Rwanda Coding Academy located in Nyabihu,
         where I have the opportunity to get involved in various development projects, 
         covering Front-end, Back-end, and Mobile areas, using various technologies.`,
    },
    {
        id: 2,
        text: `${timeInWork},I have been working in a non-profit development group focused on preparing members for the job market. 
        We dedicate 6 hours a day, flexibly, to enhance our skills and professional practices. We use agile methodologies, 
        such as SCRUM, and occasionally employ Kanban to optimize task organization.`
    },
    {
        id: 3,
        text: `In addition to this, I actively contribute to open-source projects, 
        participate in hackathons, and engage in continuous learning through online courses and tech communities. 
        My focus areas include modern web development frameworks, cloud computing, and DevOps practices, ensuring I stay up-to-date with the latest industry trends and technologies..`,
    }
];
