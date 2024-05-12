import { Nav } from './components/Nav/Nav';
import './style/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
 
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
                <Nav />
                <div className='px-8 mt-16'>
                    {children}
                </div>
            </body>
        </html>
    );
}
