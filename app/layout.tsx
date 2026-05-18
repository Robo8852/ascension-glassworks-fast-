import type {Metadata} from 'next';
import './globals.css';
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ascension Glassworks',
  description: 'Professional window and door replacement designed around craftsmanship, trust, and an elevated customer experience.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans bg-[#0B0B0B] text-white", montserrat.variable)}>
      <body suppressHydrationWarning className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
