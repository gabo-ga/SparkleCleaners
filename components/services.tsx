'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}

const services: Service[] = [
    {
        id: 1,
        title: "House Services",
        description: "Keep your home spotless and stress-free.",
        imageUrl: "/houses.webp"
    },
    {
        id: 2,
        title: "Apartment Services",
        description: "Enjoy a fresh, clean apartment without lifting a finger",
        imageUrl: "/apartments.webp"
    },
    {
        id: 3,
        title: "Office Services",
        description: "Boost productivity with a clean and organized workspace.",
        imageUrl: "/offices.webp"
    },
    {
        id: 4,
        title: "Post Construction",
        description: "Turn the mess into a masterpiece with our post-construction cleaning.",
        imageUrl: "/postconstruction.webp"
    }
];

export default function Services() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextService = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevService = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? services.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="bg-white py-4 sm:py-6">
            <div className="container mx-auto px-2 sm:px-3">
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">OUR SERVICES</h2>
                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevService}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
                    >
                        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
                    </button>

                    {/* Services Cards */}
                    <div className="flex overflow-hidden mx-6 sm:mx-12 md:mx-12">
                        <div className="flex transition-transform duration-500 ease-in-out"
                             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="w-18 min-w-full p-2 sm:p-4 md:w-24"
                                >
                                    <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden">
                                        <div className="relative h-40 sm:h-64">
                                            <img
                                                src={service.imageUrl}
                                                alt={service.title}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="p-3 sm:p-6">
                                            <h3 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-4">{service.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        onClick={nextService}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
                    >
                        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-1 sm:gap-2 mt-4 sm:mt-8">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-colors duration-300 ${
                                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}