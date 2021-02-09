import * as React from 'react'

import '../../styles/Education/Education.scss'
import EducationItem from './EducationItem'
import BlockInfo from '../BlockInfo'
import educationLogo from '../../images/education.svg'

type education = {
    institution: string,
    speciality: string,
    year: string
}

interface Props {
    educations: Array<education>
}

function Education({ educations }: Props): JSX.Element {

    const renderEducationList = () => {
        if(!educations) {
            return "Something wrong";
        }

        return educations.map(({ institution, speciality, year }) => 
            <EducationItem 
                key={institution}
                institution={institution}
                speciality={speciality}
                year={year}
            />
        );
    }

    return (
        <div className="info-row">
            <div className="container">
                <div className="education info-block">
                        <BlockInfo column title="" logo={educationLogo} />
                        <div className="education__list">
                            {renderEducationList()}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Education;
