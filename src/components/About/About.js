import styles from "./styles/about.module.css";
import profile from "./images/profile.jpg";
import responsive from "./styles/responsive.module.css";
import pdf from "./Martin - CV.pdf";

const About = () => {
    return (
        <>
            <div id="about" className={`${responsive["about-container"]}`}>
                <section
                    className={`${styles["about-section"]} ${responsive["about-section"]}`}
                >
                    <img className={`${styles["profile"]} ${responsive["profile"]}`} src={profile} alt="profile" />
                    <div className={`${responsive["info-section"]}`}>
                        <article className={`${styles["info"]} ${responsive["info"]}`}>
                            <h1 className={`${styles["about-heading"]} ${responsive["about-heading"]}`}>About me:</h1>
                            <p>
                                I decided to start with programming at the high school. My first language
                                was C++ until the first year in the university. Then i saw and started officialy
                                with JavaScript. I have no professional experience, and I am oriented towards an
                                internship or junior program.
                            </p>
                            <a className={`${styles["download-btn-link"]} ${responsive["download-btn-link"]}`} href="https://github.com/MaRtin322s" target="_blank" rel="noreferrer">GitHub account</a>
                            <a className={`${styles["download-btn-link"]} ${responsive["download-btn"]}`} href={pdf} target="_blank" rel="noreferrer" downlaod="true">Download my CV</a>
                        </article>
                        <h3 className={`${responsive["stack"]}`}>Technology stack skills:</h3>
                        <article className={`${responsive["stack"]}`}>
                            <div className={`${styles["progress-one"]} ${styles["progress"]}`}>
                                <div className="label">JavaScript</div>
                                <div className={`${styles["bar"]}`}>98%</div>
                            </div>
                            <div className={`${styles["progress-two"]} ${styles["progress"]}`}>
                                <div className="label">HTML</div>
                                <div className={`${styles["bar"]}`}>95%</div>
                            </div>
                            <div className={`${styles["progress-three"]} ${styles["progress"]}`}>
                                <div className="label">CSS</div>
                                <div className={`${styles["bar"]}`}>90%</div>
                            </div>
                            <div className={`${styles["progress-four"]} ${styles["progress"]}`}>
                                <div className="label">Database (SQL/NoSQL)</div>
                                <div className={`${styles["bar"]}`}>80%</div>
                            </div>
                            <div className={`${styles["progress-five"]} ${styles["progress"]}`}>
                                <div className="label">NodeJS</div>
                                <div className={`${styles["bar"]} ${styles["progress"]}`}>75%</div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </>
    );
}
export default About;