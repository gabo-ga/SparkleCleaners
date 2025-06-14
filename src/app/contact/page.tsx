import { ContactForm } from "../../../components/contactForm/form";

export default function Contact() {
  

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>
          <p className="text-gray-600 text-center mb-8">We would love to hear from you!</p>


          <ContactForm/>
        </div>

        <footer className="text-center mt-8 text-gray-600">
          © {new Date().getFullYear()} Sparkle Cleaners
        </footer>
      </div>
    </div>
  );
}