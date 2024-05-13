import { Nav } from './components/Nav/Nav';
import './style/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ClockNoSSR = dynamic(() => import('@/app/components/Clock/Clock'), { ssr: false});
 
export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Flash News',
    description: 'Get the latest flash news',
    icons: {
        icon: 'http://localhost:3000/assets/lightning.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`flex p-8 ${inter.className}`}>
                <div>
                    <ClockNoSSR />
                    <Nav />
                </div>
                <div className='px-8 mt-16'>
                    {children}
                </div>
            </body>
        </html>
    );
}
