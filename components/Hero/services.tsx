import ServiceCarousel from './servicesClient';

const services = [
    {
        id: 1,
        title: "House Services",
        description: "Experience the comfort of spotless home - from kitchens to living rooms, we make every corner shine.",
        imageUrl: "/houses.webp"
    },
    {
        id: 2,
        title: "Apartment Services",
        description: "Perfect for busy city living - our apartment cleaning keeps your space fresh and inviting.",
        imageUrl: "/apartments.webp"
    },
    {
        id: 3,
        title: "Office Services",
        description: "Maintain a professional image and boost focus with spotless office your team will appreciate.",
        imageUrl: "/offices.webp"
    },
    {
        id: 4,
        title: "Post Construction",
        description: "From dust to dazzling — we handle the mess after renovation so you can move in stress-free.",
        imageUrl: "/postconstruction.webp"
    }
] as const;

export default function Services() {
    return (
        <section className="bg-white py-4 sm:py-6">
            <div className="container mx-auto px-2 sm:px-3">
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
                    OUR SERVICES
                </h2>
                <p className="text-center text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
                    Offering custom cleaning packages for homes, apartments, offices, and more.
                </p>
                <ServiceCarousel services={services.map(service => ({ ...service }))} />
            </div>
        </section>
    );
}
