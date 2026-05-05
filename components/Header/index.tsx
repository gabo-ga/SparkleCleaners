import Logo from './logo';
import BookNowButton from '../booknowButton';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import Link from 'next/link';

const navItems = [
    { label: 'Home', href: '/#top' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'Contact', href: '/#contact' },
];

export default function Header() {
    return (
        <header
            className="sticky top-0 z-40 flex items-center gap-6 lg:gap-9 px-4 lg:px-12 py-3 lg:py-3.5 backdrop-blur-md shadow-sm"
            style={{ background: 'rgba(255,255,255,0.96)' }}
        >
            <div className="flex items-center gap-3 lg:gap-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="lg:hidden p-1" aria-label="Open menu">
                            <Menu size={24} />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[280px]">
                        <SheetTitle className="text-lg font-bold mx-6 mt-6">Menu</SheetTitle>
                        <nav className="flex flex-col my-2 gap-3 mx-6">
                            {navItems.map(n => (
                                <Link key={n.label} href={n.href} className="text-base font-medium text-gray-700">
                                    {n.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
                <Logo />
            </div>

            <nav className="hidden lg:flex items-center gap-6">
                {navItems.map(n => (
                    <Link
                        key={n.label}
                        href={n.href}
                        className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        {n.label}
                    </Link>
                ))}
            </nav>

            <div className="flex-1" />

            <a
                href="tel:9293770976"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
                <Phone size={16} />
                <span>(929) 377-0976</span>
            </a>

            <BookNowButton size="sm" scrollTo="#contact" />
        </header>
    );
}
