export const Footer = () => {
    return (
        <footer className='flex h-16 w-full items-center justify-between border-t border-black/5 px-16'>
            <span className='text-center text-sm'>
                &copy; {new Date().getFullYear()} Nutrivibe. All rights reserved.
            </span>
            <span className='text-center text-sm'>
                Made with ❤️ by{' '}
                <a
                    href='https://github.com/konyogony'
                    className='text-primary'
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    konyogony
                </a>
            </span>
        </footer>
    );
};
