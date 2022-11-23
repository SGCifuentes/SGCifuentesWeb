import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className='bg-slate-900 h-screen'>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}
