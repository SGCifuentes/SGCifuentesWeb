import Navbar from './navbar';

interface Props {
    children: JSX.Element;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
};

export default Layout;
