import React from 'react'

import '../../styles/Education/Education.scss'
import EducationItem from './EducationItem'
import BlockInfo from '../BlockInfo'
import educationLogo from '../../images/education.svg'


function Education({ educations }) {

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
