import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Nav from '../components/Nav';

export default function Home() {
    const [selectedSection, setSelectedSection] = useState('about');

    useEffect(() => {
        const currentUrl = window.location.href;
        const urlFragments = currentUrl.split('#');

        if (urlFragments.length >= 2) {
            const fragment = urlFragments[1];
            setSelectedSection(fragment);
        }
    }, []);

    const currentCompany = 'Globant';
    return (
        <div className='flex h-screen flex-col bg-gradient-to-br from-blue-800 to-gray-700 lg:flex-row lg:justify-center'>
            <div className='flex flex-col justify-between p-8 lg:mx-auto lg:w-1/2'>
                <div className='ml-10'>
                    <div className='space-y-3'>
                        <div>
                            <p className='text-cyan-300'>Hi!, i`m</p>
                            <h1 className='text-4xl font-bold text-slate-50'>
                                Sebastian Gonzalez Cifuentes
                            </h1>
                        </div>
                        <h2 className='text-md font-bold text-slate-100'>
                            Web UI Developer at {currentCompany}
                        </h2>
                        <p className='text-sm font-light text-slate-200'>
                            I specialize in crafting web solutions that are not
                            only intuitive and fast but also deliver exceptional
                            user experiences.
                        </p>
                    </div>

                    <Nav
                        selectedSection={selectedSection}
                        setSelectedSection={setSelectedSection}
                    />
                </div>
                <div className='underline- flex w-fit space-x-3'>
                    <Link
                        href={'https://github.com/SGCifuentes'}
                        target='__blank'
                        className='rounded-full bg-gray-800 p-2'
                    >
                        <FiGithub fill='white' className='mt-0.5' />
                    </Link>
                    <Link
                        href={'https://twitter.com/SGCifuentes_'}
                        target='__blank'
                        className='rounded-full bg-gray-800 p-2'
                    >
                        <FiTwitter fill='white' className='mt-0.5' />
                    </Link>
                    <Link
                        href={'https://www.linkedin.com/in/sgcifuentes/'}
                        target='__blank'
                        className='rounded-full bg-gray-800 p-2'
                    >
                        <FiLinkedin fill='white' className='mt-0.5' />
                    </Link>
                </div>
            </div>
            <div className='flex-1 p-8 lg:overflow-y-auto'>
                <div id='about'>
                    <p>About Me</p>
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Enim aliquid amet modi aut laborum, qui eius
                            incidunt nesciunt et ullam eos nulla excepturi
                            repellendus dolorum velit reprehenderit similique,
                            ex illum.
                        </p>
                        <Image alt='Sebastian Gonzalez' src={''} />
                    </div>
                </div>

                <div id='experience'>
                    <p>Where I’ve Worked</p>
                </div>

                <div id='projects'>
                    <p>Some Things I’ve Built</p>
                </div>
            </div>
        </div>
    );
}
