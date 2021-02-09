import * as React from 'react'

import '../../styles/Skills/SkillsItem.scss'
import BlockInfo from '../BlockInfo'

interface Props {
    title: string,
    logo: string,
    skills: Array<string>
}

function SkillsItem({ title, logo, skills }: Props): JSX.Element {

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
