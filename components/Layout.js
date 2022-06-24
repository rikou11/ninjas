import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../styles/Home.module.css'
import HiddenLayers from "./HiddenLayers";
const Layout = ({ children }) => {
    return (
        <div className='content'>
            <Navbar />
            <HiddenLayers />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;