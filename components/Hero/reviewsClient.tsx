'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import type { Review } from '../../../sparkle-cleaners/types';

interface ReviewCarouselProps {
    reviews: Review[];
}

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
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
        <div className="relative max-w-3xl mx-auto">
            <button 
                onClick={prevReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mx-12 sm:mx-36">
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
                </div>
            </div>

            <button 
                onClick={nextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
            >
                <ChevronRight className="h-6 w-6" />
            </button>
        </div>
    );
}