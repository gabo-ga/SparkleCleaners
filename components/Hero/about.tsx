import Image from 'next/image';

const values = [
    { t: 'Quality Service', d: 'We maintain the highest standards in cleaning and customer service.', c: 'var(--brand-blue)' },
    { t: 'Reliability', d: 'Consistent, dependable service you can count on every time.', c: 'var(--green-500)' },
    { t: 'Integrity', d: 'Honest, transparent practices in everything we do.', c: 'var(--brand-navy)' },
];

export default function About() {
    return (
        <section
            id="about"
            className="py-20 lg:py-[90px] px-6 lg:px-12 scroll-mt-20"
            style={{ background: 'var(--neutral-200)' }}
        >
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center mb-14 lg:mb-16">
                    <div>
                        <div
                            className="text-xs font-semibold uppercase tracking-[0.12em] mb-3.5"
                            style={{ color: 'var(--brand-blue)' }}
                        >
                            About Us
                        </div>
                        <h2 className="font-extrabold uppercase tracking-tight text-3xl lg:text-[40px] mb-4 leading-[1.15]">
                            Your trusted cleaning partner in{' '}
                            <span style={{ color: 'var(--brand-blue)' }}>NYC</span>
                        </h2>
                        <p className="text-base lg:text-[17px] leading-[1.6] mb-4" style={{ color: 'var(--fg-muted)' }}>
                            We&apos;re a family-owned cleaning company built on resilience and a love for the city we
                            live in. Our mission is to provide high-quality, reliable, and compassionate cleaning that
                            creates safe, healthy, and welcoming spaces for homes and businesses across New York.
                        </p>
                        <p className="text-base lg:text-[17px] leading-[1.6] m-0" style={{ color: 'var(--fg-muted)' }}>
                            Every team member is trained, background-checked, and proud of what they do.
                        </p>
                    </div>
                    <div
                        className="relative rounded-[20px] overflow-hidden aspect-[4/3]"
                        style={{ boxShadow: 'var(--shadow-md)' }}
                    >
                        <Image src="/crew.webp" alt="Sparkle Cleaners crew" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {values.map(v => (
                        <div
                            key={v.t}
                            className="bg-white rounded-[20px] p-7"
                            style={{ boxShadow: 'var(--shadow-sm)' }}
                        >
                            <div className="w-1.5 h-8 rounded-[3px] mb-3.5" style={{ background: v.c }} />
                            <h3 className="font-bold text-xl mb-2 text-gray-900">{v.t}</h3>
                            <p className="text-sm leading-relaxed m-0" style={{ color: 'var(--fg-muted)' }}>
                                {v.d}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
