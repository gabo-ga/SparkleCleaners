import Image from 'next/image';
import Link from 'next/link';

const services = ['House Cleaning', 'Apartment Cleaning', 'Office Cleaning', 'Post-Construction'];
const company: Array<[string, string]> = [
    ['About', '/#about'],
    ['Reviews', '/#reviews'],
    ['Contact', '/#contact'],
];

export default function Footer() {
    return (
        <footer style={{ background: 'var(--brand-navy)' }} className="text-white px-6 lg:px-12 pt-14 pb-8">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-9">
                <div>
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative h-11 w-11">
                            <Image src="/Logo.svg" alt="Sparkle Cleaners NYC" fill className="object-contain" />
                        </div>
                        <span className="text-lg font-bold tracking-tight leading-none">
                            Sparkle Cleaners <span style={{ color: 'var(--brand-blue)' }}>NYC</span>
                        </span>
                    </Link>
                    <p className="mt-4 max-w-[280px] text-sm text-white/70 leading-relaxed">
                        A family-owned cleaning company making NYC homes and offices shine since day one.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider mb-3.5">Services</h4>
                    {services.map(s => (
                        <Link
                            key={s}
                            href="/#services"
                            className="block text-sm text-white/70 hover:text-white transition-colors py-1"
                        >
                            {s}
                        </Link>
                    ))}
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider mb-3.5">Company</h4>
                    {company.map(([s, h]) => (
                        <Link
                            key={s}
                            href={h}
                            className="block text-sm text-white/70 hover:text-white transition-colors py-1"
                        >
                            {s}
                        </Link>
                    ))}
                </div>

                <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider mb-3.5">Contact</h4>
                    <address className="not-italic text-sm text-white/70 leading-relaxed">
                        50-28 61st Street<br />
                        Woodside, NY 11377<br />
                        <a href="tel:9293770976" className="text-white/85 hover:text-white transition-colors">
                            (929) 377-0976
                        </a>
                    </address>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto mt-10 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-white/50">
                <div>© {new Date().getFullYear()} Sparkle Cleaners NYC. All rights reserved.</div>
                <div>Licensed &amp; insured · Serving all five boroughs</div>
            </div>
        </footer>
    );
}
