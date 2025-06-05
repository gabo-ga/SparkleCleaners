import Logo from './logo';
import BookNowButton from '../booknowButton';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-3 py-2 bg-white shadow-lg">
            <div className="flex items-center gap-2 lg:justify-between lg:w-screen lg:pr-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="lg:hidden">
                            <Menu size={24} />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px]">
                        <SheetTitle className="text-lg font-bold mx-6 mt-6">
                            Menu
                        </SheetTitle>
                        <nav className="flex flex-col my-1 gap-3 mx-6">
                            <Link href="/" className="text-lg font-medium">Home</Link>
                            <Link href="/services" className="text-lg font-medium">Services</Link>
                            <Link href="/about" className="text-lg font-medium">About Us</Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <Logo />
                <nav className="hidden lg:flex items-center gap-8 ml-8">
                    <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                        Home
                    </Link>
                    <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                        Services
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                        About Us
                    </Link>
                </nav>
            </div>
            <div className='lg:w-42'>
            <BookNowButton />
            </div>
        </header>
    );
}