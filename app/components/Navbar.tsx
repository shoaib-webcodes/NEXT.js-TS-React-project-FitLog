'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { ExerciseContext } from '../context/ExerciseContext';


export default function Navbar() {
  const context = useContext(ExerciseContext);

  if (!context) {
    throw new Error('Navbar must be used inside ExerciseProvider');
  }

  const { planCount , savedCount } = context;

 


  return (
    <header className="w-full bg-[#121212] text-white border-b border-[#222222] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Section: Logo & Brand Name */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 focus:outline-none">
           
            <div className="relative w-8 h-8 flex items-center justify-center bg-[#1a1a1a] rounded">
              <Image 
                src="/logo.png" 
                alt="Fitlog Logo" 
                width={28} 
                height={28} 
                className="object-contain"
                priority
              />
            </div>
            <span className="font-extrabold tracking-wider text-lg text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 bg-[#181818] px-2 py-1.5 rounded-full border border-[#262626]">
          <Link 
            href="/" 
            className="px-5 py-2 rounded-full text-sm font-medium bg-[#1e2316] text-[#ccff00] transition-colors shadow-inner"
          >
            Workouts
          </Link>
          <Link 
            href="/my-plan" 
            className="px-5 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            My Plan
          </Link>
        </nav>

        {/* Right Section: Plan & Saved Counters */}
        <div className="flex items-center gap-6 text-sm">
          {/* Plan Badge */}
          <Link href="/my-plan" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
            <span>Plan</span>
            <span className="w-6 h-6 rounded-full bg-[#ccff00] text-black font-bold text-xs flex items-center justify-center">
              {planCount}
            </span>
          </Link>

          {/* Saved Badge */}
          <Link href="/my-plan" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
            <span>Saved</span>
            <span className="w-6 h-6 rounded-full bg-[#1b1b1b] border border-[#333333] text-neutral-300 font-bold text-xs flex items-center justify-center">
            {savedCount}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}