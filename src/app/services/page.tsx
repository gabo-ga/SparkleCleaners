import Image from 'next/image';
import BookNowButton from '../../../components/booknowButton';
import { CheckCircle2 } from 'lucide-react';
import HeroBanner from '../../../components/Services/heroBanner';

const services = [
  {
    title: "House Cleaning",
    description: "Keep your home spotless and stress-free with our expert house cleaning services. Our professional team uses premium products and techniques to ensure your home shines from top to bottom.",
    features: ["Deep cleaning of all rooms and living spaces", "Dusting of all surfaces and fixtures", "Vacuuming and mopping of all floors", "Window sills and baseboard cleaning"],
    options: ["One-time deep clean","Regular maintenance"],
  },
  {
    title: "Apartment Cleaning",
    description: "Enjoy a fresh, clean apartment tailored to your lifestyle. Our apartment cleaning services are designed to maximize your space and  create a comfortable living environment.",
    features: ["Studio to multi-bedroom", "Thorough cleaning of all rooms", "Floor cleaning and polishing", "Dust removal from all surfaces"],
    options: ["Move-in/Move-out"],
  },
  {
    title: "Office Cleaning",
    description: "Maintain a productive, professional workspace effortlessly. Our office cleaning services ensure  your business environment remains clean, organized and impressive to clients and employees alike.",
    features: ["After-hours service", "Workstation and desk cleaning", "Conference room preparation", "Floor maintenance"],
    options: ["Daily maintenance", "Specialized sanitization"],
  },
  {
    title: "Post Construction",
    description: "From dust to dazzling - we clean up after the build. Our post-construction cleaning services transform newly built or renovated spaces into move-in ready environments.",
    features: ["Removal of construction dust and debris", "Detailed cleaning of all surfaces", "Window and glass cleaning", "Floor scrubbing and polishing"],
    options: ["Residential construction", "Commercial projects"],
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <HeroBanner/>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <div 
                key={service.title}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <BookNowButton />
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and experience the difference of professional cleaning services.
          </p>
          <div className="flex justify-center gap-4">
            <BookNowButton />
            <a 
              href="tel:+19293770976"
              className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}