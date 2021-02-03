import React from 'react'

import '../styles/index.css'
import Header from './Header'
import DetailInfo from './DetailInfo'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import ProjectsBlock from './Projects/ProjectsBlock'
import SocialBlock from './SocialBlock'

const detailInfoData = [
    { name: 'Phone numbers', data: ['+380666352216', '+380631058700'] },
    { name: 'E-mail', data: ['vladislav.parubchenko@gmail.com'] },
    { name: 'Date of birth', data: '15.11.2000' },
    { name: 'Languages', data: ['Russian (native)', 'Ukrainian (native)', 'English (intermediate)'] }
];

function App() {
    return (
        <div>
            <Header title="CV" />
            <DetailInfo data={detailInfoData} />
            <Education />
            <Skills />
            <ProjectsBlock />
        </div>
    )
}
// <SocialBlock />
export default App;
