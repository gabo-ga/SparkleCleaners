import { ShieldCheck, Calendar, Sparkles, Users } from 'lucide-react';

const items = [
    {
        title: 'Certified Deep Cleaning',
        body: 'Trained pros using eco-friendly products that are safe for families & pets.',
        Icon: Sparkles,
    },
    {
        title: 'Safe Booking System',
        body: 'Secure online booking, transparent pricing, no hidden fees.',
        Icon: ShieldCheck,
    },
    {
        title: 'Same-Day Service',
        body: 'Flexible scheduling with availability across all five boroughs.',
        Icon: Calendar,
    },
    {
        title: 'Trusted by New Yorkers',
        body: 'Hundreds of 5-star reviews from happy customers around the city.',
        Icon: Users,
    },
];

export default function Benefits() {
    return (
        <section className="py-20 lg:py-[90px] px-6 lg:px-12" style={{ background: 'var(--neutral-200)' }}>
            <div className="text-center mb-10 lg:mb-12">
                <h2 className="font-extrabold uppercase tracking-tight text-3xl lg:text-[40px] m-0">
                    Amazing benefits
                </h2>
                <p className="mt-2.5 text-base lg:text-[17px]" style={{ color: 'var(--fg-muted)' }}>
                    Why New Yorkers choose Sparkle Cleaners.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1280px] mx-auto">
                {items.map(({ title, body, Icon }) => (
                    <div
                        key={title}
                        className="bg-white rounded-[20px] p-6 lg:p-[26px] transition-shadow duration-300"
                        style={{ boxShadow: 'var(--shadow-sm)' }}
                    >
                        <div
                            className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                            style={{ background: 'var(--blue-100)', color: 'var(--brand-blue)' }}
                        >
                            <Icon size={22} strokeWidth={2} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
                        <p className="text-sm leading-relaxed m-0" style={{ color: 'var(--fg-muted)' }}>
                            {body}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
