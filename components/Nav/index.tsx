import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
interface NavProps {
    selectedSection: string;
    setSelectedSection: Dispatch<SetStateAction<string>>;
}
const Nav = ({ selectedSection, setSelectedSection }: NavProps) => {
    return (
        <div className='mt-10 lg:flex flex-col hidden'>
            <Link
                href='#about'
                className={`${selectedSection === 'about' ? 'underline' : ''} ${
                    selectedSection === 'about'
                        ? 'text-sky-300'
                        : 'text-sky-600'
                } flex items-center gap-2`}
                onClick={() => setSelectedSection('about')}
            >
                <hr
                    className={
                        selectedSection === 'about'
                            ? 'w-10 border-sky-300'
                            : 'w-5 border-sky-600'
                    }
                />
                About
            </Link>
            <Link
                href='#experience'
                className={`${
                    selectedSection === 'experience' ? 'underline' : ''
                } ${
                    selectedSection === 'experience'
                        ? 'text-sky-300'
                        : 'text-sky-600'
                } flex items-center gap-2`}
                onClick={() => setSelectedSection('experience')}
            >
                <hr
                    className={
                        selectedSection === 'experience'
                            ? 'w-10 border-sky-300'
                            : 'w-5 border-sky-600'
                    }
                />
                Experience
            </Link>
            <Link
                href='#projects'
                className={`${
                    selectedSection === 'projects' ? 'underline' : ''
                } ${
                    selectedSection === 'projects'
                        ? 'text-sky-300'
                        : 'text-sky-600'
                }  flex items-center gap-2`}
                onClick={() => setSelectedSection('projects')}
            >
                <hr
                    className={
                        selectedSection === 'projects'
                            ? 'w-10 border-sky-300'
                            : 'w-5 border-sky-600'
                    }
                />
                Projects
            </Link>
        </div>
    );
};

export default Nav;
