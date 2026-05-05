import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import BookNowButton from '../booknowButton';

const stats: Array<[string, string]> = [
    ['500+', 'Happy customers'],
    ['5★', 'Avg. review'],
    ['7 days', 'Same-week service'],
];

export default function HeroSection() {
    return (
        <section
            id="top"
            className="relative overflow-hidden rounded-b-[30px] px-6 sm:px-10 lg:px-12 pt-20 pb-24 lg:pt-[100px] lg:pb-[120px]"
        >
            <Image
                src="/background.webp"
                alt=""
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover -z-10"
            />
            <div
                className="absolute inset-0 -z-10"
                style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.55), rgba(28,66,116,0.35))' }}
            />

            <div className="relative max-w-[720px] text-white">
                <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs lg:text-[13px] font-medium bg-white/15 backdrop-blur-sm">
                    <Sparkles size={14} />
                    <span>Family-owned · serving all five boroughs</span>
                </div>

                <h1 className="font-extrabold uppercase tracking-tight leading-[1.05] text-[36px] sm:text-5xl lg:text-[64px] mb-5 lg:mb-6">
                    Expert cleaning at your doorstep
                </h1>

                <p className="text-base sm:text-lg lg:text-[19px] leading-[1.55] text-white/90 max-w-[560px] mb-7 lg:mb-8">
                    Hi! we&apos;re a professional cleaning company dedicated to high-quality, personalized cleaning
                    services that fit your specific needs. Committed to making your space shine!
                </p>

                <div className="flex flex-wrap gap-3.5">
                    <BookNowButton variant="book" size="lg" scrollTo="#contact" />
                    <BookNowButton variant="quote" size="lg" scrollTo="#services" />
                </div>

                <div className="mt-10 lg:mt-12 flex flex-wrap gap-8">
                    {stats.map(([n, l]) => (
                        <div key={l}>
                            <div className="text-2xl lg:text-[30px] font-bold tracking-tight leading-none">{n}</div>
                            <div className="mt-1 text-xs lg:text-[13px] text-white/70">{l}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
