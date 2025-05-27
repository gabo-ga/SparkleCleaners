'use client';
import LogoImage from '../public/Logo.svg';
import Image from 'next/image';

export default function Logo() {
    return (
        <div className="flex items-center">
            <Image 
                src={LogoImage}
                alt="Sparkle Cleaners Logo"
                width={34}
                height={34}
                className="object-contain lg:w-14 lg:h-14"
            />
            <h1 className="text-base lg:text-xl font-bold text-black">
                Sparkle Cleaners NYC
            </h1>
        </div>
    );
}