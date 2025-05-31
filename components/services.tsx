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
        title: "Deep Cleaning",
        description: "Thorough cleaning of all surfaces, including hard-to-reach areas and detailed attention to bathrooms and kitchens.",
        imageUrl: "/deep-cleaning.jpg"
    },
    {
        id: 2,
        title: "Regular Maintenance",
        description: "Weekly or bi-weekly cleaning services to keep your space consistently clean and organized.",
        imageUrl: "/maintenance.jpg"
    },
    {
        id: 3,
        title: "Move In/Out Cleaning",
        description: "Comprehensive cleaning service for moving transitions, ensuring spaces are perfectly clean for new occupants.",
        imageUrl: "/move-in-out.jpg"
    },
    {
        id: 4,
        title: "Office Cleaning",
        description: "Professional cleaning services tailored for commercial spaces and offices.",
        imageUrl: "/office-cleaning.jpg"
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
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                
                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevService}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    {/* Services Cards */}
                    <div className="flex overflow-hidden mx-12">
                        <div className="flex transition-transform duration-500 ease-in-out"
                             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    className="w-full min-w-full p-4"
                                >
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                        <div className="relative h-64">
                                            <img
                                                src={service.imageUrl}
                                                alt={service.title}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                                            <p className="text-gray-600">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        onClick={nextService}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
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