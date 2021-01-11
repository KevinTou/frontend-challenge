import React from 'react';
import Image from 'next/image';

interface HeroInterface {
    hero: {
        header: string,
        content: string,
        cta: string,
        src: string
    }
}

const Hero: React.FC<HeroInterface> = ({ hero: { header, content, cta, src } }) => {
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap">
            <div className="flex flex-wrap flex-col justify-center items-center mt-5 mb-5 text-center">
                <h1 className="text-3xl font-bold uppercase w-3/4 mb-5">{header}</h1>
                <p className="w-3/4">{content}</p>
            </div>
            <div className="flex flex-wrap flex-col-reverse md:flex-col justify-center items-center">
                <div className="md:w-full mb-5">
                    <Image src={src} width="401" height="537" />
                </div>
                <button className="bg-yellow-400 rounded p-3 font-bold uppercase mb-5 md:mb-7">{cta}</button>
            </div>
        </div>
    )
}

export default Hero;