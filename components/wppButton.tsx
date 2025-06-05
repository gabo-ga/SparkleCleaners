"use client";


export default function WppButton() {
    const handleWhatsappClick = () => {
        window.location.href = "https://wa.link/dmv3hy";
    };

    return (
        <button
                            onClick={handleWhatsappClick}
                            className="w-7 h-7 bg-contain bg-no-repeat bg-center"
                            style={{ backgroundImage: "url('/whatsapp_logo.webp')" }}
                            aria-label="Contact via WhatsApp"
                        />
    );
}