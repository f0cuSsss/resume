import * as React from 'react'

import '../../styles/Projects/Project.scss'
import githubLogo from '../../images/github.png'

interface Props {
    title: string,
    stack: Array<string>,
    github: string
}

function Project({ title, stack, github }: Props): JSX.Element {

    const renderStack = () => {
        if(!stack) {
            return "Something wrong";
        }

        return stack.map(item => <li key={item}>{item}</li> );
    }

    return (
        <div className="project__item" key={title}>
            <div className="project__content">
                <div className="project__title">{title}</div>
                <div className="project__stack-list">
                    <ul>
                        {renderStack()}
                    </ul>
                </div>
            </div>
            <div className="project__github">
                <a href={github}>
                    <img alt="github" src={githubLogo} />
                </a>
            </div>
        </div>
    )
}

export default Project;
