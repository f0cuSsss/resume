import React from 'react'

import '../../styles/Education/Education.css'
import EducationItem from './EducationItem'

function Education() {
    return (
        <div className="info-row">
            <div className="container">
                <div className="education info-block">
                    <div className="education__logo">

                    </div>
                    <div className="education__list">
                        <EducationItem 
                            institution="Mykolayiv Construction College of Construction and Architecture"
                            speciality="121 «Software Engineering»"
                            year="2016-2020"
                        />
                        <EducationItem 
                            institution="IT-STEP Academy"
                            speciality="Software developer"
                            year="2018-2021"
                        />
                        <EducationItem 
                            institution="National university shipbuilding name of Admiral Makarov"
                            speciality="122 - Сomputer science"
                            year="2020-2022"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
