import styles from "./styles/footer.module.css";
import resp from "./styles/responsive.module.css";

const Footer = () => {
    return (
        <footer className={`${styles["footer"]} ${resp["footer"]}`}>
            <div>
                <h1 className={styles["footer_heading"]}>Personal Portfolio</h1>
                <p>All rights reserved &copy; Created by Martin Sofroniev</p>
            </div>
            {/* eslint-disable-next-line */}
            <ul role={"list"}>
                <li><a className={`${styles["footer-link"]}`} href="#home">Home</a></li>
                <li><a className={`${styles["footer-link"]}`} href="#about">About Me</a></li>
                <li><a className={`${styles["footer-link"]}`} href="#projects">Projects</a></li>
                <li><a className={`${styles["footer-link"]}`} href="#education">Education</a></li>
                <li><a className={`${styles["footer-link"]}`} href="#contact">Contact Me</a></li>
            </ul>
            {/* eslint-disable-next-line */}
            <ul role={"list"}>
                <li>Follow me on</li>
                <li className={styles["footer-item"]}>
                    <a
                        className={styles["footer-link"]}
                        href="https://github.com/MaRtin322s"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-github-square" />
                    </a>
                </li>
                <li className={styles["footer-item"]}>
                    <a
                        className={styles["footer-link"]}
                        href="https://www.facebook.com/profile.php?id=100009733451214"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-facebook-square" />
                    </a>
                </li>
                <li className={styles["footer-item"]}>
                    <a
                        className={styles["footer-link"]}
                        href="https://www.instagram.com/martin13s18/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-instagram" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;