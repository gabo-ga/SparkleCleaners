import Image from 'next/image';
import BookNowButton from '../booknowButton';
import Reviews from './reviews';
import Services from './services';
import Contact from './contact';
import Benefits from './benefits';

export default function Hero() {
    return (
        <>
            <section className="relative w-full h-[40vh]  sm:h-[60vh] md:h-[70vh] lg:h-[70vh] overflow-hidden">
                <Image
                    src="/background.webp"
                    alt="Sparkle Cleaners Background"
                    fill
                    priority
                    sizes="100vw"
                    quality={100}
                    className="object-cover object-top filter brightness-100 opacity-60 lg:object-cover"
                />
                <div className="absolute flex flex-col items-center justify-center text-black p-7 pr-34 sm:p-10 sm:pr-38 sm:pt-14 md:pr-64 lg:pr-80 lg:pt-26 lg:pl-16">
                    <span className="text-xl sm:text-4xl lg:text-6xl font-bold mb-4">EXPERT CLEANING AT YOUR DOORSTEP</span>
                    <p className="text-xs sm:text-xl mb-6 lg:text-3xl">Hi! we are a professional cleaning company dedicated high-quality, personalized cleaning services that fit your specific needs. Committed to making your space shine!.
                    </p>
                    <div className='flex items-start justify-start w-full'>
                        <BookNowButton/>
                    </div>
                </div>
            </section>
            <Benefits/>
            <Reviews/>
            <Services/>
            <Contact/>
        </>
    );
}