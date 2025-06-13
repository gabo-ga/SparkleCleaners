'use client';

interface BookNowButtonProps {
    onClick?: () => void;
    className?: string;
    variant?: 'book' | 'quote';
    text?: string;
}

export default function BookNowButton({ 
    onClick, 
    className, 
    variant = 'book',
    text
}: BookNowButtonProps) {
    const buttonColors = {
        book: '#FF0F0FC9',
        quote: '#93CF30'
    };

    const hoverColors = {
        book: '#ff0f0f',
        quote: '#84bb2b'
    };

    return (
        <button
            onClick={onClick}
            className={`
                px-4 lg:px-5 
                py-2 lg:py-2 
                text-white 
                text-sm lg:text-lg 
                font-bold 
                rounded-lg 
                transition-colors 
                duration-300 
                shadow-md 
                hover:shadow-lg
                ${className || ''}
            `}
            style={{
                backgroundColor: buttonColors[variant],
                ['--hover-color' as string]: hoverColors[variant]
            }}
        >
            {text || (variant === 'book' ? 'BOOK NOW' : 'GET A QUOTE')}
        </button>
    );
}