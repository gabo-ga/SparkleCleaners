"use client";
import Logo from './logo';
import BookNowButton from '../booknowButton';

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <Logo />
            <BookNowButton />
        </header>
    );
}