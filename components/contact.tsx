'use client';

export default function Contact() {
    const handleWhatsappClick = () => {
        window.location.href = "https://wa.link/dmv3hy";
    };
  
    const handleImessageClick = () => {
        window.location.href = "sms:+19293770976";
    };
  
    return (
        <div className="flex flex-row w-full items-center md:justify-center gap-5 py-3">
            <article>
                <div className="flex flex-col items-center justify-center gap-5 px-9 py-5 max-w-md">
                    <h2 className="text-black text-xl font-medium font-Poppins">
                        Amazing benefits!
                    </h2>
                    <p className="text-justify items-center text-sm font-Poppins text-wrap md:text-md">
                        Choose us for exceptional cleaning tailored to New Yorkers. Our
                        trained and professional team ensure a spotless, safe home. Enjoy
                        flexible scheduling, customized plans, same-day cleaning and
                        reliable services. Trust us to transform your space.
                    </p>
                    <div className="flex flex-row items-start gap-3 text-xl font-semibold text-[#aae858] font-Poppins">
                        <h3>Send us a message!</h3>
                        <button
                            onClick={handleWhatsappClick}
                            className="w-7 h-7 bg-contain bg-no-repeat bg-center"
                            style={{ backgroundImage: "url('/whatsapp_logo.png')" }}
                            aria-label="Contact via WhatsApp"
                        />
                        <button
                            onClick={handleImessageClick}
                            className="w-7 h-7 bg-contain bg-no-repeat bg-center"
                            style={{ backgroundImage: "url('/messages_logo.jpeg')" }}
                            aria-label="Contact via iMessage"
                        />
                    </div>
                </div>
            </article>
            <div 
                className="hidden md:block h-72 w-64 bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/man.jpg')" }}
                role="img"
                aria-label="Cleaning professional"
            />
        </div>
    );
}
