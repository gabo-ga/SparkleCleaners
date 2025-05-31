'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
}

const reviews: Review[] = [
    {
        id: 1,
        name: "Sarah Thompson",
        rating: 5,
        comment: "Excellent service! They made my apartment spotless. Highly recommend their deep cleaning service.",
        date: "May 15, 2025"
    },
    {
        id: 2,
        name: "Michael Chen",
        rating: 5,
        comment: "Very professional team. They were on time and did a fantastic job with our office cleaning.",
        date: "May 18, 2025"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        rating: 5,
        comment: "Best cleaning service in NYC! They pay attention to every detail.",
        date: "May 20, 2025"
    }
];

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Reviews</h2>
                
                <div className="relative max-w-3xl mx-auto">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    
                    {/* Review Card */}
                    <div className="bg-white p-8 rounded-lg shadow-lg mx-12">
                        <div className="flex gap-1 mb-4">
                            {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-gray-700 mb-6 italic">
                            "{reviews[currentIndex].comment}"
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">{reviews[currentIndex].name}</p>
                            <p className="text-gray-500 text-sm">{reviews[currentIndex].date}</p>
                        </div>
                    </div>

                    <button 
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}