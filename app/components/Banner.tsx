// components/Banner.tsx
import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Banner() {
  return (
    <section className="container mx-auto">
      <div className="mx-auto grid min-h-[378px] max-w-[1340px] overflow-hidden rounded-2xl border border-[#2b2d33] bg-[#1e1e1e] md:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10 flex flex-col justify-center px-7 py-12 sm:px-12 md:py-10">
          <p className="mb-8 text-[10px] font-extrabold tracking-wide text-[#d5ff00]">
            WORKOUT LIBRARY
          </p>

          <h1
            className={`${anton.className} max-w-[520px] text-[43px] uppercase leading-[1.05] text-white sm:text-[52px] lg:text-[58px]`}
          >
            Train with intent. Log every set.
          </h1>

          <p className="mt-1 max-w-[420px] text-sm leading-5 text-[#a7abb5]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="/workouts"
            className="mt-9 w-fit bg-[#d5ff00] px-3 py-2 rounded-xl text-[11px] font-bold uppercase leading-4 text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d5ff00]"
          >
            Browse workouts
          </Link>
        </div>

        <div className="relative min-h-[370px] md:min-h-full">
          {/* Replace this path with your own hero image */}
          <Image
            src="/banner.png"
            alt="Athlete exercising on a stationary bike"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-contain object-center p-3 md:object-right md:p-7"
          />
        </div>
      </div>
    </section>
  );
}