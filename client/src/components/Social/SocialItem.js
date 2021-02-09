import React from 'react'

import '../../styles/Social/SocialItem.scss'

function SocialItem({ alt, src, link }) {
    return (
        <a href={link} className="social__item" >
            <img alt={alt} src={src} />
        </a>
    )
}

export default SocialItem;
