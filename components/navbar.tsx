import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo_transparent.png';

const Navbar = () => {
    return (
        <nav className='border-gray-500 px-10 py-5'>
            <div className='container mx-auto flex flex-wrap items-center justify-between'>
                <Link href='/'>
                    <Image
                        src={logo}
                        alt='SGCifuentes'
                        width={45}
                        height={45}
                    />
                </Link>
                <div className='order-2 flex'>
                    <a href='' className='py-1.5 px-4 text-emerald-500 outline'>
                        Resume
                    </a>
                </div>
                <div className='order-1'>
                    <ul className='flex flex-row space-x-2 text-sm font-medium'>
                        <li>
                            <a
                                className='block rounded py-2 pl-3 pr-4 text-emerald-500 hover:text-emerald-700  hover:underline'
                                href=''
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className='block rounded py-2 pl-3 pr-4 text-emerald-500 hover:text-emerald-700  hover:underline'
                                href=''
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                className='block rounded py-2 pl-3 pr-4 text-emerald-500 hover:text-emerald-700  hover:underline'
                                href=''
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                className='block rounded py-2 pl-3 pr-4 text-emerald-500 hover:text-emerald-700  hover:underline'
                                href=''
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
