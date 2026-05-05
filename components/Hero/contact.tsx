import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '../contactForm/form';

export default function Contact() {
    return (
        <section id="contact" className="py-20 lg:py-[90px] px-6 lg:px-12 scroll-mt-20 bg-white">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                <div>
                    <h2 className="font-extrabold uppercase tracking-tight text-3xl lg:text-[40px] mb-3.5 leading-[1.15]">
                        Send us a <span style={{ color: 'var(--green-500)' }}>message!</span>
                    </h2>
                    <p className="text-base lg:text-[17px] leading-relaxed mb-7" style={{ color: 'var(--fg-muted)' }}>
                        We would love to hear from you! Share a few details and our team will get back to you with a
                        tailored quote.
                    </p>
                    <div className="flex flex-col gap-3">
                        <a
                            href="tel:9293770976"
                            className="flex items-center gap-3 text-[15px] text-gray-900 hover:opacity-80 transition-opacity"
                        >
                            <span style={{ color: 'var(--brand-blue)' }}>
                                <Phone size={20} />
                            </span>
                            (929) 377-0976
                        </a>
                        <a
                            href="mailto:hello@sparklecleanersnyc.com"
                            className="flex items-center gap-3 text-[15px] text-gray-900 hover:opacity-80 transition-opacity"
                        >
                            <span style={{ color: 'var(--brand-blue)' }}>
                                <Mail size={20} />
                            </span>
                            hello@sparklecleanersnyc.com
                        </a>
                        <div className="flex items-start gap-3 text-[15px] text-gray-900">
                            <span className="mt-0.5" style={{ color: 'var(--brand-blue)' }}>
                                <MapPin size={20} />
                            </span>
                            50-28 61st Street, Woodside, NY 11377
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-[20px] p-7" style={{ boxShadow: 'var(--shadow-sm)' }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
