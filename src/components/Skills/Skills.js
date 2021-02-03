import React from 'react'

import '../../styles/Skills/Skills.css'
import SkillsItem from './SkillsItem'

const frontendSkillsData = [
    'React & Redux',
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
    'OOA, OOD, OOP, UML',
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
                    <SkillsItem title="Frontend" logoPath="" skills={frontendSkillsData} />
                    <SkillsItem title="Backend" logoPath="" skills={backendSkillsData} />
                    <SkillsItem title="Database" logoPath="" skills={databaseSkillsData} />
                    <SkillsItem title="Additional" logoPath="" skills={additionalSkillsData} />
                </div>
            </div>
        </div>
    )
}

export default Skills;
