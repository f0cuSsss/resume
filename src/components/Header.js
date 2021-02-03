import React from 'react'

import '../styles/Header.css'

function Header(props) {
    return (
        <header>
            <div className="container">
                <div className="header__content">
                    <div className="header__title">
                        {props.title}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
