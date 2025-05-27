'use client';

interface BookNowButtonProps {
    onClick?: () => void;
    className?: string;
}

export default function BookNowButton({ onClick, className }: BookNowButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-4 lg:px-5 py-2 lg:py-2 bg-[#FF0F0FC9] text-white text-sm lg:text-lg font-bold rounded-lg  hover:bg-[#ff0f0f] 
                transition-colors 
                duration-300 
                shadow-md 
                hover:shadow-lg
                ${className || ''}
            `}
        >
            BOOK NOW
        </button>
    );
}