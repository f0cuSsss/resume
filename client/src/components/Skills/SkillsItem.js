import React from 'react'

import '../../styles/Skills/SkillsItem.scss'
import BlockInfo from '../BlockInfo'

function SkillsItem({ title, logo, skills }) {

    const renderSkillsList = () => {
        if(!skills) {
            return "Something wrong";
        }

        return skills.map(skill => <li key={skill}>{skill}</li> );
    }

    return (
        <div className="skills__item">
            <BlockInfo title={title} logo={logo} />
            <div className="skills_list">
                <ul>
                    {renderSkillsList()}
                </ul>
            </div>
        </div>
    )
}

export default SkillsItem;
