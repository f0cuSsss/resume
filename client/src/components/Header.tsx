import * as React from 'react'

import '../styles/Header.scss'
import SocialBlock from './Social/SocialBlock'
import downloadLogo from '../images/download.svg'

interface Props {
    title: string
}

function Header({ title }: Props): JSX.Element {
    return (
        <header>
            <div className="container">
                <div className="header__content">
                    <div className="download-block">
                        <a href="/resume/download" >
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
