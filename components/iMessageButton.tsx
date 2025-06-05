"use client";


export default function IMessageButton() {
    const handleIMessageClick = () => {
        window.location.href = "sms:+19293770976";
    };

    return (
        <button
        onClick={handleIMessageClick}
        className="w-7 h-7 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/messages_logo.webp')" }}
        aria-label="Contact via iMessage"
    />
    );
}