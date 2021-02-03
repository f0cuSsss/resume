import React from 'react'

import '../../styles/Projects/Project.css'

function Project({ title, stack, github }) {
    return (
        <div className="project__item" key={title}>
            <div className="project__content">
                <div className="project__title"></div>
                <div className="project__stack-list">
                    <ul>
                        <li>123</li>
                        <li>123</li>
                        <li>123</li>
                    </ul>
                </div>
            </div>
            <div className="project__github"></div>
        </div>
    )
}

export default Project;
