import React from 'react';
import Image from 'next/image';

export default function Hero({ hero }) {
    const { header, content, cta, src } = hero;

    return (
        <div className="grid grid-rows-2">
            <div className="w-100">
                <h2>{header}</h2>
                <p>{content}</p>
                <p>{cta}</p>
            </div>

            <Image src={src} width="100%" height="100%" className="bg-blue-700" />
        </div>
    )
}
