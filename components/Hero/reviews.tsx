import { Star } from 'lucide-react';

const reviews = [
    { name: 'Maria G.', text: 'My apartment has never looked better. The team was punctual, friendly, and thorough.' },
    { name: 'James K.', text: 'Booked last minute for a move-out clean. They handled everything and saved our deposit.' },
    { name: 'Rachel D.', text: 'We use Sparkle bi-weekly for our office. Place always smells fresh on Monday mornings.' },
];

export default function Reviews() {
    return (
        <section
            id="reviews"
            className="py-20 lg:py-[90px] px-6 lg:px-12 scroll-mt-20"
            style={{ background: 'var(--blue-50)' }}
        >
            <div className="text-center mb-10 lg:mb-12">
                <h2 className="font-extrabold uppercase tracking-tight text-3xl lg:text-[40px] m-0">
                    Our Reviews
                </h2>
                <p className="mt-2.5 text-base lg:text-[17px]" style={{ color: 'var(--fg-muted)' }}>
                    Trusted by hundreds of New Yorkers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1200px] mx-auto">
                {reviews.map(r => (
                    <div
                        key={r.name}
                        className="bg-white rounded-[20px] p-7"
                        style={{ boxShadow: 'var(--shadow-sm)' }}
                    >
                        <div className="flex gap-0.5 mb-3" style={{ color: 'var(--yellow-400)' }}>
                            {[0, 1, 2, 3, 4].map(i => (
                                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                            ))}
                        </div>
                        <p className="text-[15px] leading-relaxed text-gray-900 mb-4">&ldquo;{r.text}&rdquo;</p>
                        <div className="font-semibold text-sm text-gray-900">{r.name}</div>
                        <div className="text-xs" style={{ color: 'var(--fg-subtle)' }}>
                            Verified customer
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

