import banner from "./images/banner-01.jpg";
import styles from "./styles/header.module.css";

const Header = () => {
    return (
        <header id="home" className={`${styles["heading"]}`}>
            <nav className={`${styles["navigation"]}`}>
                <ul className={`${styles["navbar"]}`}>
                    <li><a className={`${styles["nav-link"]}`} href="#home">Home</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#about">About Me</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#projects">Projects</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#education">Education</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#contact">Contact Me</a></li>
                </ul>
            </nav>
            <div className={`${styles["container"]}`}>
                <img className={`${styles["banner"]}`} src={banner} alt="banner" />
                <div className={`${styles["gradient"]}`}></div>
                <h1 className={`${styles["heading-title"]}`}>Welcome to my personal portfolio!</h1>
                <p className={`${styles["welcoming-msg"]}`}>
                    I'm an enthusiastic junior front-end developer with a desire to grow 
                    and improve every day. I'm ready to learn and develop my skills.
                </p>
            </div>
        </header>
    );
};
export default Header;