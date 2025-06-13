import Image from 'next/image';
import BookNowButton from '../../../components/booknowButton';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/about-banner.webp"
          alt="Our Cleaning Team"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Sparkle Cleaners
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto px-4">
            Your Trusted Cleaning Partner in NYC
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Sparkle Cleaners, we're committed to delivering exceptional cleaning services 
              that transform spaces and enhance lives. Our dedication to quality, attention to 
              detail, and customer satisfaction sets us apart in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Service",
                description: "We maintain the highest standards in cleaning and customer service."
              },
              {
                title: "Reliability",
                description: "Consistent, dependable service you can count on every time."
              },
              {
                title: "Integrity",
                description: "Honest, transparent practices in everything we do."
              }
            ].map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our professional cleaning team consists of trained and experienced individuals 
              who take pride in their work. Each member undergoes thorough background checks 
              and regular training to ensure the highest quality service.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our satisfied customers and discover why we're New York's trusted cleaning service.
          </p>
          <div className="flex justify-center gap-4">
            <BookNowButton variant="quote" text="Get Started Today" />
          </div>
        </div>
      </section>
    </div>
  );
}