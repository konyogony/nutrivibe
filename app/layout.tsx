import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/app/globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Nutrivibe',
    description: 'Explore the wonders of nutrition and health with insect protein bars.',
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
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
