import { Navbar } from '@/components/navbar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Nutrivibe',
    description: 'Explore the wonders of nutrition and health.',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang='en'>
            <body className={cn('antialiased', inter.className)} suppressHydrationWarning>
                <Navbar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
