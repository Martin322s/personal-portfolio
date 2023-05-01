import banner from "./images/banner-01.jpg";
import styles from "./styles/header.module.css";

const Header = () => {
    return (
        <header className={`${styles["heading"]}`}>
            <nav className={`${styles["navigation"]}`}>
                <ul className={`${styles["navbar"]}`}>
                    <li><a className={`${styles["nav-link"]}`} href="#home">Home</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#about">About Me</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#gallery">Gallery</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#services">Service</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#reviews">Reviews</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#pricing">Pricing</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#contact">Contact Me</a></li>
                </ul>
            </nav>
            <img className={`${styles["banner"]}`} src={banner} alt="banner" />
        </header>
    );
};
export default Header;