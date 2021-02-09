import * as React from 'react'

import '../../styles/Projects/ProjectsBlock.scss'
import Project from './Project'

type projectItemType = {
    title: string,
    stack: Array<string>,
    github: string
}

interface Props {
    projects: Array<projectItemType>
}

function ProjectsBlock({ projects }: Props): JSX.Element {

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
