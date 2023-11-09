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
        <div className='flex min-h-screen flex-col bg-gradient-to-br from-blue-800 to-gray-700 lg:flex-row lg:justify-center'>
            <div className='flex flex-col justify-between p-8 lg:mx-auto lg:w-1/2'>
                <div className='lg:ml-10'>
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
                        <p className='text-md font-light text-slate-200'>
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

                <div className='underline- mt-4 flex w-fit space-x-3'>
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
                    <h6 className='mb-2 text-lg font-bold'>ABOUT</h6>
                    <div className='text-md'>
                        <p className='mb-2'>
                            Desde el 2021, comencé mi travesía en el mundo del
                            desarrollo web, siempre enfocándome en React y sus
                            derivados, como Next.js. Esto ha sido el lienzo para
                            expresar mi pasión y dedicación inquebrantable en la
                            creación de interfaces innovadoras, accesibles e
                            intuitivas.
                        </p>
                        <p className='mb-2'>
                            Mi compromiso siempre está orientado a ofrecer la
                            mejor experiencia de usuario, ajustando diseños para
                            garantizar una interacción fluida y rápida.
                        </p>
                        <p className='mb-2'>
                            Además de mi cargo en Globant como Web UI, he tenido
                            la oportunidad de desempeñar el papel de mentor para
                            estudiantes de ingeniería que buscan adentrarse en
                            el mundo del desarrollo frontend. Comparto consejos
                            que me fueron útiles, brindo retroalimentación
                            constante sobre su progreso y ofrezco apoyo para que
                            continúen aprendiendo y alcancen su primera
                            experiencia laboral. Compartir conocimientos y
                            ayudar a otros ha sido otra de mis pasiones;
                            motivándome a seguir aprendiendo y creciendo día a
                            día.
                        </p>
                    </div>
                </div>

                <div id='experience' className='mt-8'>
                    <p>Where I’ve Worked</p>
                </div>

                <div id='projects'>
                    <p>Some Things I’ve Built</p>
                </div>
            </div>
        </div>
    );
}
