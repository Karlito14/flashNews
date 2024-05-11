import { Nav } from './components/Nav/Nav';
import './globals.css';
import { Inter, Roboto_Mono } from 'next/font/google';
 
export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`flex p-8 ${inter.className}`}>
                <Nav />
                <main className='px-8 mt-16'>
                    {children}
                </main>
            </body>
        </html>
    );
}
