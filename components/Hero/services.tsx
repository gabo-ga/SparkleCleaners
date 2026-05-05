import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import BookNowButton from '../booknowButton';

type Service = {
    title: string;
    img: string;
    copy: string;
    features: string[];
    options: string[];
};

const allServices: Service[] = [
    {
        title: 'House Cleaning',
        img: '/houses.webp',
        copy: 'Keep your home spotless and stress-free with our expert house cleaning. Premium products, top-to-bottom shine.',
        features: [
            'Deep cleaning of all rooms',
            'Dusting of all surfaces',
            'Floor vacuuming & mopping',
            'Window sills & baseboards',
        ],
        options: ['One-time deep clean', 'Regular maintenance'],
    },
    {
        title: 'Apartment Cleaning',
        img: '/apartments.webp',
        copy: 'A fresh, clean apartment tailored to your lifestyle — designed for NYC living.',
        features: [
            'Studio to multi-bedroom',
            'Thorough cleaning of all rooms',
            'Floor cleaning & polishing',
            'Dust removal from surfaces',
        ],
        options: ['Move-in / Move-out'],
    },
    {
        title: 'Office Cleaning',
        img: '/offices.webp',
        copy: 'A productive, professional workspace effortlessly. Quiet after-hours service so your team can focus.',
        features: [
            'After-hours service',
            'Workstation & desk cleaning',
            'Conference room prep',
            'Floor maintenance',
        ],
        options: ['Daily maintenance', 'Specialized sanitization'],
    },
    {
        title: 'Post-Construction',
        img: '/postconstruction.webp',
        copy: 'From dust to dazzling — we handle the mess after renovation so you can move in stress-free.',
        features: [
            'Construction dust & debris',
            'Detailed surface cleaning',
            'Window & glass cleaning',
            'Floor scrubbing & polishing',
        ],
        options: ['Residential', 'Commercial'],
    },
];

function ServiceRow({ s, reverse }: { s: Service; reverse: boolean }) {
    return (
        <div
            className="bg-white rounded-[20px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[340px]"
            style={{ boxShadow: 'var(--shadow-sm)' }}
        >
            <div className={`relative h-56 lg:h-auto ${reverse ? 'lg:order-2' : ''}`}>
                <Image src={s.img} alt={s.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="p-6 lg:p-10 flex flex-col">
                <h3 className="font-bold text-2xl lg:text-[28px] text-gray-900 mb-3">{s.title}</h3>
                <p className="text-[15px] leading-relaxed mb-4.5 mb-4" style={{ color: 'var(--fg-muted)' }}>
                    {s.copy}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 list-none p-0 m-0">
                    {s.features.map(f => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-900">
                            <CheckCircle2 size={16} style={{ color: 'var(--green-500)' }} />
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-5">
                    {s.options.map(o => (
                        <span
                            key={o}
                            className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                            style={{ background: 'var(--blue-50)', color: 'var(--blue-800)' }}
                        >
                            {o}
                        </span>
                    ))}
                </div>
                <div className="mt-auto">
                    <BookNowButton variant="quote" scrollTo="#contact" />
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    return (
        <section id="services" className="py-20 lg:py-[90px] px-6 lg:px-12 scroll-mt-20">
            <div className="text-center mb-10 lg:mb-12">
                <h2 className="font-extrabold uppercase tracking-tight text-3xl lg:text-[40px] m-0">
                    Our Services
                </h2>
                <p className="mt-2.5 text-base lg:text-[17px]" style={{ color: 'var(--fg-muted)' }}>
                    Tailored cleaning for every kind of NYC space.
                </p>
            </div>

            <div className="flex flex-col gap-6 max-w-[1200px] mx-auto">
                {allServices.map((s, i) => (
                    <ServiceRow key={s.title} s={s} reverse={i % 2 === 1} />
                ))}
            </div>
        </section>
    );
}
