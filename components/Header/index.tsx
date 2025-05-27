"use client";

import Logo from './logo';
import BookNowButton from '../booknowButton';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-3 py-2 bg-white shadow-md">
            <div className="flex items-center gap-2 lg:gap-76">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="lg:hidden">
                            <Menu size={24} />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px]">
                        <nav className="flex flex-col gap-4">
                            <a href="#" className="text-lg font-medium">Home</a>
                            <a href="#" className="text-lg font-medium">Services</a>
                            <a href="#" className="text-lg font-medium">About Us</a>
                        </nav>
                    </SheetContent>
                </Sheet>
                <Logo />
                <nav className="hidden lg:flex items-center gap-8 ml-8">
                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                        Home
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                        Services
                    </a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                        About Us
                    </a>
                </nav>
            </div>
            <BookNowButton />
        </header>
    );
}