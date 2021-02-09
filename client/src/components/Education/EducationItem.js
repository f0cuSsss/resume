import React from 'react'

import '../../styles/Education/EducationItem.scss'

function EducationItem({ institution, speciality, year }) {
    return (
        <div className="education__item">
            <div className="education__institution">{institution}</div>
            <div className="education__speciality">{speciality}</div>
            <div className="education__year">{year}</div>
        </div>
    );
}

export default EducationItem;
