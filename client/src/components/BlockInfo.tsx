import React from 'react'

import '../styles/BlockInfo.scss'

interface Props {
    column?: boolean,
    title: string,
    logo: string
}

function BlockInfo({ column, title, logo }: Props): JSX.Element {

    const renderTitle = () => {
        if(!title) {
            return null;
        }
        return (
            <div className="block-info__title">
                {title}
            </div>
        );
    }

    return (
        <div className={`block-info ${column ? 'flex-column' : ''}`}>
            {renderTitle()}
            <div className="block-info__logo">
                <img alt={title} src={logo} />
            </div>
        </div>
    )
}

export default BlockInfo;
