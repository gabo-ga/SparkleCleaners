import BookNowButton from '../booknowButton';

export default function CTA() {
    return (
        <section className="text-white text-center px-6 lg:px-12 py-16 lg:py-[72px]" style={{ background: 'var(--brand-navy)' }}>
            <h2 className="font-extrabold uppercase tracking-tight text-3xl lg:text-4xl mb-3.5 text-white">
                Ready to experience the difference?
            </h2>
            <p className="text-base lg:text-lg max-w-[640px] mx-auto mb-7 leading-snug text-white/75">
                Join our satisfied customers and discover why we&apos;re New York&apos;s trusted cleaning service.
            </p>
            <BookNowButton variant="quote" size="lg" text="GET STARTED TODAY" scrollTo="#contact" />
        </section>
    );
}
