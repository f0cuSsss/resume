import React from 'react'

import '../styles/BlockInfo.css'

function BlockInfo({ column, title, logo }) {

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
