import React from 'react'

import '../styles/Header.css'
import SocialBlock from './Social/SocialBlock'
import downloadLogo from '../images/download.svg'

function Header({ title, name }) {
    return (
        <header>
            <div className="container">
                <div className="header__content">
                    <div className="download-block">
                        <a href="#" >
                            <img alt="download resume" src={downloadLogo} />
                        </a>
                    </div>
                    <div className="header__title">
                        {title}
                    </div>
                    <SocialBlock />
                </div>
            </div>
        </header>
    )
}

export default Header;
