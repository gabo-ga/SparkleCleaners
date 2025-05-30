"use client"
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Image
                src="/background.webp"
                alt="Sparkle Cleaners Background"
                fill
                priority
                className="object-cover filter brightness-100 opacity-60"
            />
            <div className="absolute flex flex-col items-center justify-center text-black p-4">
                <h1 className="text-xl lg:text-6xl font-bold mb-4">EXPERT CLEANING AT YOUR DOORSTEP</h1>
                <p className="text-lg lg:text-xl mb-8">Your trusted partner for all your cleaning needs.</p>
                <a href="#services" className="px-6 py-3 bg-[#FF0F0FC9] text-white rounded-lg hover:bg-[#ff0f0f] transition-colors duration-300">
                    Explore Our Services
                </a>
            </div>
        </div>
    );
}