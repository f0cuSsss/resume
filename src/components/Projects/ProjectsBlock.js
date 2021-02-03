import React from 'react'

import '../../styles/Projects/ProjectsBlock.css'
import Project from './Project'

const projects = [
    { title: '', stack: [], github: '' },
    { title: '', stack: [], github: '' },
    { title: '', stack: [], github: '' },
    { title: '', stack: [], github: '' },
    { title: '', stack: [], github: '' },
    { title: '', stack: [], github: '' },
    { title: '', stack: [], github: '' },
    { title: '', stack: [], github: '' }
];

function ProjectsBlock() {
    return (
        <div className="info-row">
            <div className="container">
                <div className="projects info-block">
                   ---Projects---
                </div>
            </div>
        </div>
    )
}

/*
 { projects ??
                        projects.map(({ title, stack, github }) => {
                            <Project title={title} stack={stack} github={github} />
                        })
                    }
*/

export default ProjectsBlock;
