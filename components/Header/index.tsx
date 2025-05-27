"use client";

import Logo from './logo';
import BookNowButton from '../booknowButton';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            <div className="flex items-center gap-4">
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
                            <a href="#" className="text-lg font-medium">About</a>
                            <a href="#" className="text-lg font-medium">Contact</a>
                        </nav>
                    </SheetContent>
                </Sheet>
                <Logo />
            </div>
            <BookNowButton />
        </header>
    );
}