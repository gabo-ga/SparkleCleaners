import Image from 'next/image';

const HeroBanner = () => {
    return (
        <section className="relative h-[40vh] w-full">
            <Image
                src="/services-banner.webp"
                alt="Professional Cleaning Services"
                fill
                priority
                className="object-cover brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Professional Cleaning Services
                </h1>
                <p className="text-lg md:text-xl text-center max-w-2xl mx-auto px-4">
                    Expert cleaning solutions for every space
                </p>
            </div>
        </section>
    );
};

export default HeroBanner;