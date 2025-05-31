"use client"
import Image from 'next/image';
import BookNowButton from '../booknowButton';
import Reviews from '../reviews';
import Services from '../services';
import Contact from '../contact';

export default function Hero() {
    return (
        <>
            <section className="relative w-full h-74 overflow-hidden">
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
            </section>

            <section className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-4">
                    {/* Grid Item 1 */}
                    <div className="bg-white p-2">
                        <h3 className="text-lg font-bold mb-4">Certified Deep Cleaning</h3>
                    </div>
                    {/* Grid Item 2 */}
                    <div className="bg-white p-2">
                        <h3 className="text-lg font-bold mb-4">Quick Online Booking</h3>
                    </div>

                    {/* Grid Item 3 */}
                    <div className="bg-white p-2">
                        <h3 className="text-lg font-bold mb-4">Safe Booking System</h3>
                    </div>

                    {/* Grid Item 4 */}
                    <div className="bg-white p-2">
                        <h3 className="text-lg font-bold mb-4">Trustworthy Professionals</h3>
                    </div>
                </div>
            </section>

            <Reviews/>

            <Services/>

            <Contact/>
        </>
    );
}