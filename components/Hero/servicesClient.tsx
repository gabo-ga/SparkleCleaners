'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { type Service } from '../../types/index';

interface ServiceCarouselProps {
    services: Service[];
}

export default function ServiceCarousel({ services }: ServiceCarouselProps) {
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
        <div className="relative max-w-6xl mx-auto">
            <button 
                onClick={prevService}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
            >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            <div className="flex overflow-hidden mx-6 sm:mx-12 md:mx-12">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="w-18 min-w-full p-2 sm:p-4 md:w-24"
                        >
                            <div className="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden">
                                <div className="relative h-40 sm:h-64">
                                    <Image
                                        src={service.imageUrl}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 60vw"
                                        className="object-cover"
                                        priority={service.id === 1}
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
    );
}