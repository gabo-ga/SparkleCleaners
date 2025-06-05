import ServiceCarousel from './servicesClient';

const services = [
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
] as const;

export default function Services() {
    return (
        <section className="bg-white py-4 sm:py-6">
            <div className="container mx-auto px-2 sm:px-3">
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
                    OUR SERVICES
                </h2>
                <ServiceCarousel services={services.map(service => ({ ...service }))} />
            </div>
        </section>
    );
}