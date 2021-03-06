import * as React from 'react'

import '../styles/index.scss'
import Header from './Header'
import DetailInfo from './DetailInfo'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import ProjectsBlock from './Projects/ProjectsBlock'
import { 
    infoItemType, 
    educationItemType, 
    projectItemType 
} from '../types/types'

const detailInfoData: Array<infoItemType> = [
    { name: 'Phone numbers', data: ['+38(066) 63 52 216', '+38(063) 10 58 700'] },
    { name: 'E-mail', data: ['vladislav.parubchenko@gmail.com'] },
    { name: 'Date of birth', data: ['15.11.2000'] },
    { name: 'Languages', data: ['Russian (native)', 'Ukrainian (native)', 'English (intermediate)'] }
];

const educationData: Array<educationItemType> = [
    { institution: "Mykolayiv Construction College of Construction and Architecture", speciality: "121 «Software Engineering»", year: "2016 - 2020" },
    { institution: "IT-STEP Academy", speciality: "Software developer", year: "2018 - 2021" },
    { institution: "National university shipbuilding name of Admiral Makarov", speciality: "122 - Сomputer science", year: "2020 - 2022" }
];

const projectsData: Array<projectItemType> = [
    { title: 'Resume', stack: ['React', 'Express'], github: 'https://github.com/f0cuSsss/resume' },
    { title: 'Authorization with PassportJS', stack: ['React', 'Redux', 'NodeJS [Express]', 'MongoDB [Mongoose]'], github: 'https://github.com/f0cuSsss/auth' },
    { title: 'Search pictures - Unsplash', stack: ['React', 'Redux', 'axios'], github: 'https://github.com/f0cuSsss/react-unsplash' },
    { title: 'Image fetching from Unsplash api', stack: ['JS'], github: 'https://github.com/f0cuSsss/unsplash_fetch' },
    { title: 'Search videos on Youtube', stack: ['React [hooks]', 'axios', 'SemanticUI'], github: 'https://github.com/f0cuSsss/Youtube-videos' },
    { title: 'Diagram builder (drawing a pie and bar chart)', stack: ['Windows Forms'], github: 'https://github.com/f0cuSsss/WF_DiagramBuilder' },
    { title: 'Travel agency database', stack: ['MSSQL'], github: 'https://github.com/f0cuSsss/Travel_DB' },
    { title: 'Registration. Authorization. Book list', stack: ['ASP.NET', 'JS, jQuery, Bootstrap, AJAX', 'MSSQL', 'ADO.NET'], github: 'https://github.com/f0cuSsss/ASP.NET_MVC_Basic' },
    { title: 'Telegram design. Conversation with a bot', stack: ['WPF'], github: 'https://github.com/f0cuSsss/WPF_ChatBot_TelegramDesign' }
];

function App(): JSX.Element {
    return (
        <>
            <Header title="CV" />
            <DetailInfo name="Vladyslav Parubchenko" detailInfo={detailInfoData} />
            <Education educations={educationData} />
            <Skills />
            <ProjectsBlock projects={projectsData} />
        </>
    )
}

export default App;
