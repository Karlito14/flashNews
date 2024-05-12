'use client';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageType {
    image: string;
    fallback: StaticImageData;
    className?: string;
    width?: number;
    height?: number;
    alt: string;
}

export const ImageComponent = (props: ImageType) => {
    const [imageSrc, setImageSrc] = useState(props.image);
    return (
        <Image 
            src={imageSrc} 
            alt={props.alt} 
            height={props.height} 
            width={props.width} 
            className={props.className}
            onError={() => setImageSrc(props.fallback.src)}
        />
    );
};