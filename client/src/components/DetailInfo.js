import React from 'react'

import '../styles/DetailInfo.scss'

function DetailInfo({ name, detailInfo }) {

    const renderTable = () => {
        if(!detailInfo) {
            return <tr>Something wrong!</tr>
        }

        return detailInfo.map(({ name, data }) => {
            return (
                <tr key={name}>
                    <td>{name}</td>
                    <td>{data.join("\n")}</td>
                </tr>
            );
        });
    }

    return (
        <div className="info-row">
            <div className="container">
                <div className="detail-info info-block">
                <div className="detail-info__name">{name}</div>
                <table className="detail-info__table" >
                    <tbody>
                        {renderTable()}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default DetailInfo;
