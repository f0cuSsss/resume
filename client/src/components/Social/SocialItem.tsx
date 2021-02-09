import * as React from 'react'

import '../../styles/Social/SocialItem.scss'

interface Props {
    alt: string,
    src: string,
    link: string
}

function SocialItem({ alt, src, link }: Props) {
    return (
        <a href={link} className="social__item" >
            <img alt={alt} src={src} />
        </a>
    )
}

export default SocialItem;
