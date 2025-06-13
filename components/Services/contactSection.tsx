import BookNowButton from '../booknowButton';

export default function ContactSection() {
  return (
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
  );
}