import React from 'react'

import '../../styles/Skills/Skills.scss'
import SkillsItem from './SkillsItem'
import FrontendLogo from '../../images/frontend.svg'
import BackendLogo from '../../images/backend.svg'
import DatabaseLogo from '../../images/database.svg'
import AdditionalLogo from '../../images/additional.svg'

const frontendSkillsData = [
    'React',
    'Xamarin Forms',
    'Windows Presentation Foundation',
    'Windows Forms'
];

const backendSkillsData = [
    'NodeJS [Express]',
    'ASP.NET MVC',
    'PHP'
];

const databaseSkillsData = [
    'MySQL',
    'MSSQL',
    'MongoDB'
];

const additionalSkillsData = [
    'Redux, Typescript',
    'OOA, OOD, OOP, UML',
    'Unity',
    'ADO.NET, Entity Framework, Mongoose',
    'AJAX, SMTP',
    'Bootstrap, SemanticUI',
    'Design patterns',
    'GIT'
];


function Skills() {
    return (
        <div className="info-row">
            <div className="container">
                <div className="skills info-block">
                    <div className="skills__row">
                        <SkillsItem title="" logo={FrontendLogo} skills={frontendSkillsData} />
                        <SkillsItem title="" logo={BackendLogo} skills={backendSkillsData} />
                    </div>
                    <div className="skills__row">
                        <SkillsItem title="" logo={DatabaseLogo} skills={databaseSkillsData} />
                        <SkillsItem title="" logo={AdditionalLogo} skills={additionalSkillsData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
