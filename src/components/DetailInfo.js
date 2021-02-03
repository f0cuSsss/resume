import React from 'react'

import '../styles/DetailInfo.css'

function DetailInfo({ data }) {
    return (
        <div className="info-row">
            <div className="container">
                <div className="detail-info info-block">
                <table className="detail-info__table">
                    <tr>
                        <td>Phones</td>
                        <td>+38067565478</td>
                    </tr>
                    <tr>
                        <td>Phones</td>
                        <td>+38067565478</td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
    )
}

export default DetailInfo;
