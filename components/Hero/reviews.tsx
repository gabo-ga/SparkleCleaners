'use client';

import ReviewCarousel from './reviewsClient';
import type { Review } from '../../types';

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
] as const;

export default function Reviews() {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8">OUR REVIEWS</h2>
                <ReviewCarousel reviews={reviews} />
            </div>
        </section>
    );
}