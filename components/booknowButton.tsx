'use client';

import { useRouter } from 'next/navigation';

interface BookNowButtonProps {
    onClick?: () => void;
    className?: string;
    variant?: 'book' | 'quote' | 'ghost' | 'dark';
    size?: 'sm' | 'md' | 'lg';
    text?: string;
    href?: string;
    scrollTo?: string;
    type?: 'button' | 'submit' | 'reset';
}

export default function BookNowButton({
    onClick,
    className,
    variant = 'book',
    size = 'md',
    text,
    href,
    scrollTo,
    type = 'button',
}: BookNowButtonProps) {
    const router = useRouter();

    const variants: Record<string, string> = {
        book: 'text-white shadow-md hover:shadow-lg',
        quote: 'text-white shadow-md hover:shadow-lg',
        ghost: 'bg-white text-gray-900 border border-gray-300 hover:shadow-md',
        dark: 'text-white shadow-md hover:shadow-lg',
    };

    const inlineByVariant: Record<string, React.CSSProperties> = {
        book: { backgroundColor: 'var(--action-primary)' },
        quote: { backgroundColor: 'var(--action-quote)' },
        ghost: {},
        dark: { backgroundColor: 'var(--brand-navy)' },
    };

    const sizes: Record<string, string> = {
        sm: 'px-3.5 py-2 text-xs lg:text-sm',
        md: 'px-5 py-2.5 text-sm lg:text-base',
        lg: 'px-7 py-3.5 text-base lg:text-lg',
    };

    const handleClick = () => {
        if (onClick) onClick();
        if (scrollTo) {
            const el = document.querySelector(scrollTo);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        if (href) {
            router.push(href);
            return;
        }
        if (!onClick && !scrollTo) {
            router.push('/#contact');
        }
    };

    const label = text || (variant === 'book' ? 'BOOK NOW' : variant === 'quote' ? 'GET A QUOTE' : '');

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`
                inline-flex items-center justify-center gap-2
                font-bold tracking-wide
                rounded-[10px]
                transition-all duration-300
                whitespace-nowrap
                cursor-pointer
                ${variants[variant]} ${sizes[size]} ${className || ''}
            `}
            style={inlineByVariant[variant]}
        >
            {label}
        </button>
    );
}
