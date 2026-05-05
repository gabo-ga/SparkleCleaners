import HeroSection from './heroSection';
import Benefits from './benefits';
import Services from './services';
import About from './about';
import Reviews from './reviews';
import CTA from './cta';
import Contact from './contact';

export default function Hero() {
    return (
        <>
            <HeroSection />
            <Benefits />
            <Services />
            <About />
            <Reviews />
            <CTA />
            <Contact />
        </>
    );
}
