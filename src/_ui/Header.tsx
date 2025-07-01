
import Link from 'next/link';

import { Press_Start_2P } from 'next/font/google';

const press_start = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start'
});

export default function Header() {
  return (
    <div className="relative w-full flex items-center justify-center px-4 py-2">
      {/* Centered Title */}
       <Link href={'/pomdoro'}><h2 className={`${press_start.className} text-lg sm:text-xl md:text-2xl p-5 font-bold text-foreground`}>🌸 Pastel Palace of Peace 🌸</h2></Link>
       {/* <Link href={'/pomdoro'}><h2 className={`${press_start.className} text-lg sm:text-xl md:text-2xl p-5 font-bold text-foreground`}>🌸 HEY PRINCESS 🌸</h2></Link> */}
    </div>
  );
}
