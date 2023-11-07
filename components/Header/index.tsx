import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='bg-slate-600 p-4'>
            <div className='container mx-auto flex items-center justify-between'>
                <Link className='text-2xl font-bold text-white' href='/'>
                    Mi App
                </Link>

                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {menuOpen ? (
                            <FiX className='text-3xl text-white' />
                        ) : (
                            <FiMenu className='text-3xl text-white' />
                        )}
                    </button>
                </div>

                <ul
                    className={`space-x-4 md:flex ${
                        menuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <li>
                        <Link className='text-white' href='/'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link className='text-white' href='#about'>
                            Acerca de
                        </Link>
                    </li>
                    <li>
                        <Link className='text-white' href='#contact'>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
