export const Footer = () => {
    return (
        <footer className='flex h-16 w-full flex-col items-center justify-between border-t border-black/5 py-2.5 md:flex-row md:px-16 md:py-0'>
            <span className='text-center text-sm'>
                &copy; {new Date().getFullYear()} Nutrivibe. All rights reserved.
            </span>
            <span className='text-center text-sm'>
                Made with &hearts; by&nbsp;
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
