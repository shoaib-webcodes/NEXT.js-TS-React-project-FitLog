import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="w-full border-t border-[#30343b] bg-[#181a1e] text-white pt-5">
            {/* max-w-7xl ebong px-4/px-6 diye duipashe padding/margin rakha holo jate mobile-e edge theke dure thake */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">

                    {/* Logo & Brand Name */}
                    <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl  text-[#181a1e]">
                            <Image
                                src="/logo.png"
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                        </div>
                        <span className="text-xl font-black tracking-wider uppercase text-white">
                            FIT<span className="text-lime-300">LOG</span>
                        </span>
                    </Link>

                    {/* Copyright Text */}
                    <p className="text-center text-xs sm:text-sm font-medium text-gray-400">
                        &copy; {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;