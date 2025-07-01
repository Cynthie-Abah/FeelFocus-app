'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ClipboardDocumentIcon, ClockIcon, HomeIcon, ListBulletIcon } from '@heroicons/react/24/solid';
import { Press_Start_2P } from 'next/font/google';

const press_start = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start'
});

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative ">
      {/* 📋 Toggle Button on Mobile */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="fixed top-4 left-4 z-30 sm:hidden"
      >
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full bg-white/50 backdrop-blur-md shadow-lg hover:shadow-xl transition-all p-3 hover:scale-110"
        >
          <ListBulletIcon className="w-6 h-6 text-foreground" />
        </button>
      </motion.div>

      {/* 🌸 Sidebar Drawer on Mobile */}
      {open && (
        <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            className="fixed top-0 left-0 z-40 h-full w-64 bg-foreground/50 backdrop-blur-md p-6 shadow-xl sm:hidden border-r border-foreground"
        >
            {/* ❌ Close Button */}
            <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-background hover:text-pink-500 text-3xl font-bold"
            aria-label="Close sidebar"
            >
            &times;
            </button>

            {/* 🌸 Sidebar Content */}
            <h2 className={`text-lg font-bold mb-6 mt-2 text-background text-center ${press_start.className}`}>🌸 HEY 🌸 <br/> ANGEL</h2>

            <nav className="flex flex-col gap-4 text-sm text-background pl-5">

            <Link                          
            className='flex items-center gap-2 text-[1rem] p-3 hover:text-white focus:text-white active:text-white hover:bg-peach/30 focus:bg-peach/30 active:bg-peach/30 duration-100 ease-out rounded-md' 
            href={'/'}
            onClick={() => setOpen(false)}
            >
            <HomeIcon className='text-[.3rem] w-[18px] h-[18px]'/>
            <span>Home</span>
            </Link>

            <Link                          
            className='flex items-center gap-2 text-[1rem] p-3 hover:text-white focus:text-white active:text-white hover:bg-peach/30 focus:bg-peach/30 active:bg-peach/30 duration-100 ease-out rounded-md' 
            href={'/pomdoro'}
            onClick={() => setOpen(false)}
            >
            <ClockIcon className='text-[.3rem] w-[18px] h-[18px]'/>
            <span>Pomdoro Timer</span>
            </Link>

            <Link                          
            className='flex items-center gap-2 text-[1rem] p-3 hover:text-white focus:text-white active:text-white hover:bg-peach/30 focus:bg-peach/30 active:bg-peach/30 duration-100 ease-out rounded-md' 
            href={'/to-dos'}
            onClick={() => setOpen(false)}
            >
            <ClipboardDocumentIcon className='text-[.3rem] w-[18px] h-[18px]'/>
            <span>Task Organizer</span>
            </Link>

            </nav>
        </motion.aside>
        )}


      {/* 🖥 Desktop Sidebar */}
      <aside className="hidden md:flex flex-col gap-4 p-6 bg-foreground/50 backdrop-blur-lg border-r border-foreground shadow-md rounded-tr-2xl rounded-br-3xl min-h-screen">
        <h2 className={`text-sm font-bold mb-6 mt-2 text-background text-center ${press_start.className}`}>🌸 HEY ANGEL 🌸</h2>
        <nav className="flex flex-col gap-3 text-sm text-background">
          <Link                          
            className='flex items-center gap-2 text-[1rem] p-3 hover:text-white focus:text-white active:text-white hover:bg-peach/30 focus:bg-peach/30 active:bg-peach/30 duration-100 ease-out rounded-md' 
            href={'/'}
            >
            <HomeIcon className='text-[.3rem] w-[18px] h-[18px]'/>
            <span>Home</span>
            </Link>

            <Link                          
            className='flex items-center gap-2 text-[1rem] p-3 hover:text-white focus:text-white active:text-white hover:bg-peach/30 focus:bg-peach/30 active:bg-peach/30 duration-100 ease-out rounded-md' 
            href={'/pomdoro'}
            >
            <ClockIcon className='text-[.3rem] w-[18px] h-[18px]'/>
            <span>Pomdoro Timer</span>
            </Link>

            <Link                          
            className='flex items-center gap-2 text-[1rem] p-3 hover:text-white focus:text-white active:text-white hover:bg-peach/30 focus:bg-peach/30 active:bg-peach/30 duration-100 ease-out rounded-md' 
            href={'/to-dos'}
            >
            <ClipboardDocumentIcon className='text-[.3rem] w-[18px] h-[18px]'/>
            <span>Task Organizer</span>
            </Link>
        </nav>
      </aside>

    </div>
  );
}
