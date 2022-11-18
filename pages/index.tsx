import Image from 'next/image';
import logo from '../public/logo.png';

export default function Home() {
    return (
        <div className="relative h-screen w-screen bg-[url('../public/wallpaper-christmas.jpg')] bg-cover bg-no-repeat">
            <div className='absolute bottom-20 flex w-full flex-col content-end items-center justify-end gap-12 align-bottom'>
                <Image src={logo} alt='SGCifuentes' />
                <h1 className='text-center text-6xl text-white animate-pulse'>
                    Merry Christmas!!!
                </h1>
            </div>
        </div>
    );
}
