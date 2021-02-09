import React from 'react'

import '../../styles/Social/SocialBlock.scss'
import SocialItem from './SocialItem'
import githubLogo from '../../images/github.png'
import telegramLogo from '../../images/telegram.svg'

function SocialBlock() {
    return (
        <div className="social-block">
            <SocialItem alt="github profile" src={githubLogo} link="https://github.com/f0cuSsss" />
            <SocialItem alt="telegram profile" src={telegramLogo} link="https://t.me/f0cuSsss" />
        </div>
    )
}

export default SocialBlock;
