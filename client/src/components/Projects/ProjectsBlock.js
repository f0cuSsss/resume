import React from 'react'

import '../../styles/Projects/ProjectsBlock.scss'
import Project from './Project'

function ProjectsBlock({ projects }) {

    const renderProjectsList = () => {
        if(!projects) {
            return "Something wrong";
        }

        return projects.map(({ title, stack, github }) => <Project key={title} title={title} stack={stack} github={github} /> );
    }

    return (
        <div className="info-row">
            <div className="container">
                <div className="projects info-block">
                   {renderProjectsList()}
                </div>
            </div>
        </div>
    )
}

export default ProjectsBlock;
