import LogoImage from '../../public/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" className="flex items-center">
            <Image 
                src={LogoImage}
                alt="Sparkle Cleaners Logo"
                width={34}
                height={34}
                className="object-contain lg:w-14 lg:h-14"
            />
            <h1 className="text-base lg:text-xl font-bold text-black">
                Sparkle Cleaners NYC
            </h1>
        </Link>
    );
}