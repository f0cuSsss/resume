import React from 'react'

import '../../styles/Social/SocialItem.css'

function SocialItem({ alt, src, link }) {
    return (
        <a href={link} className="social__item" >
            <img alt={alt} src={src} />
        </a>
    )
}

export default SocialItem;
