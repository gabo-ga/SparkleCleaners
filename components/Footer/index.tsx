'use client';

import Image from 'next/image';
import Logo from '@/public/Logo.svg';

export default function Footer() {
    return (
        <footer>
            <div className="px-11 py-3 flex flex-col items-start bg-sky-900 w-full">
                <div className="flex flex-row items-center gap-2 text-white text-md">
                    <div className="relative h-8 w-5 md:h-10 md:w-8">
                        <Image 
                            src={Logo}
                            alt="Sparkle Cleaners Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-sm font-Poppins md:text-lg">
                        Sparkle Cleaners NYC
                    </h2>
                </div>
                <address className="not-italic">
                    <h3 className="text-slate-300 text-xs font-Poppins md:text-lg">
                        50-28 61st Street
                    </h3>
                    <h3 className="text-slate-300 text-xs font-Poppins md:text-lg">
                        Woodside, NY 11377
                    </h3>
                    <a 
                        href="tel:+19293770976" 
                        className="text-slate-400 text-xs font-Poppins md:text-lg hover:text-slate-200 transition-colors"
                    >
                        (929) 377-0976
                    </a>
                </address>
            </div>
        </footer>
    );
}
