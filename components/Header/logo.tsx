import LogoImage from '../../public/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2.5">
            <Image
                src={LogoImage}
                alt="Sparkle Cleaners NYC"
                width={36}
                height={36}
                className="object-contain lg:w-[42px] lg:h-[42px]"
            />
            <span className="text-base lg:text-lg font-bold tracking-tight leading-none text-gray-900">
                Sparkle Cleaners <span style={{ color: 'var(--brand-blue)' }}>NYC</span>
            </span>
        </Link>
    );
}
