import React from 'react';
import Image from 'next/image';

interface HeroType {
    hero: {
        header: string,
        content: string,
        cta: string,
        src: string
    }
}

const Hero: React.FC<HeroType> = ({ hero: { header, content, cta, src } }) => {
    return (
        <div className="">
            <div className="">
                <h1 className="">{header}</h1>
                <p className="">{content}</p>
            </div>
            <div className="">
                <Image src={src} width="401" height="537" className="" />
                <button className="bg-yellow-400 rounded p-3 font-bold uppercase">{cta}</button>
            </div>
        </div>
    )
}

export default Hero;