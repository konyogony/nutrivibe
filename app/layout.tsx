import { Navbar } from '@/components/navbar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: '500',
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
            <body className={cn('relative antialiased', poppins.className)} suppressHydrationWarning>
                <Navbar />
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
