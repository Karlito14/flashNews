import { Nav } from './components/Nav/Nav';
import './globals.css';


export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className='flex p-8'>
                <Nav />
                <main className='px-8 mt-16'>
                    {children}
                </main>
            </body>
        </html>
    );
}
