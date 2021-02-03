import React from 'react'

import '../../styles/Skills/SkillsItem.css'

function SkillsItem({ title, logoPath, skills }) {
    return (
        <div className="skills__item">
            <div className="skills__title">{title}</div>
                <div className="skills__logo">
                    
                </div>
                <div className="skills_list">
                    <ul>
                        <li>Skill 1</li>
                        <li>Skill 2</li>
                    </ul>
                </div>
        </div>
    )
}

export default SkillsItem;
