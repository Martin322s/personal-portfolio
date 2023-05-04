import banner from "./images/banner-01.jpg";
import styles from "./styles/header.module.css";
import responsive from "./styles/responsive.module.css";

const Header = () => {
    return (
        <header id="home" className={`${styles["heading"]} ${responsive["heading"]}`}>
            <nav className={`${styles["navigation"]}`}>
                <ul className={`${styles["navbar"]} ${responsive["navbar"]}`}>
                    <li><a className={`${styles["nav-link"]}`} href="#home">Home</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#about">About Me</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#projects">Projects</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#education">Education</a></li>
                    <li><a className={`${styles["nav-link"]}`} href="#contact">Contact Me</a></li>
                </ul>
            </nav>
            <div className={`${styles["container"]} ${responsive["container"]}`}>
                <img className={`${styles["banner"]}`} src={banner} alt="banner" />
                <div className={`${styles["gradient"]}`}></div>
                <div className={`${responsive["container-text"]}`}>
                    <h1 className={`${styles["heading-title"]}`}>Welcome to my personal portfolio!</h1>
                    <p className={`${styles["welcoming-msg"]} ${responsive["welcoming-msg"]}`}>
                        I'm an enthusiastic junior front-end developer with a desire to grow
                        and improve every day. I'm ready to learn and develop my skills.
                    </p>
                </div>
            </div>
        </header>
    );
};
export default Header;