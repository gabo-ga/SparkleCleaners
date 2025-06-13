import { services } from '../../../data/services';
import ServiceCard from '../../../components/Services/ServiceCard';
import ContactSection from '../../../components/Services/contactSection';
import HeroBanner from '../../../components/Services/heroBanner';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <HeroBanner />

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} services={service} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}