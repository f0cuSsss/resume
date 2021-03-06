import * as React from 'react'
import { infoItemType } from '../types/types'

import '../styles/DetailInfo.scss'

interface Props {
    name: string,
    detailInfo: Array<infoItemType>
}

function DetailInfo({ name, detailInfo }: Props): JSX.Element {

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
                    <div className="detail-info__header">
                        <div className="detail-info__name">{name}</div>
                        <div className="detail-info__description">
                            <span>Mykolaiv or remote</span>
                            <span>
                                For vacancy <div className="vacancy">Frontend</div> | <div className="vacancy">Fullstack</div> | <div className="vacancy">Backend</div> developer
                            </span>
                        </div>
                    </div>
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
