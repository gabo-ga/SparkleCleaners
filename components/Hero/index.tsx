"use client"
import Image from 'next/image';
import BookNowButton from '../booknowButton';

export default function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Image
                src="/background.webp"
                alt="Sparkle Cleaners Background"
                fill
                priority
                className="object-contain object-top filter brightness-100 opacity-60 lg:object-cover"
            />
            <div className="absolute flex flex-col items-center justify-center text-black p-7 pr-34 sm:p-10 sm:pr-38 sm:pt-14">
                <h1 className="text-xl sm:text-4xl lg:text-6xl font-bold mb-4">EXPERT CLEANING AT YOUR DOORSTEP</h1>
                <p className="text-xs sm:text-xl mb-6">Hi! we are a professional cleaning company offering personalized cleaning services</p>
                <div className='flex items-start justify-start w-full'>
                <BookNowButton/>
                </div>
            </div>
        </div>
    );
}