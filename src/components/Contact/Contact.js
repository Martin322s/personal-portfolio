import styles from "./styles/contact.module.css";
import responsive from "./styles/responsive.module.css";

const Contact = () => {
    return (
        <>
            <h1 id="contact" className={`${styles["contact-heading"]}`}>Contact me</h1>
            <section className={`${styles["contact-section"]} ${responsive["contact-section"]}`}>
                <form className={`${styles["contact-form"]} ${responsive["contact-form"]}`}>
                    <div className={`${styles["form-group-one"]} ${responsive["form-group-one"]}`}>
                        <div>
                            <label htmlFor="fname">First name: </label>
                            <div>
                                <input type="text" id="fname" />
                            </div>
                        </div>
                        <div className={`${styles["form-group"]}`}>
                            <label className={`${responsive["lname"]}`} htmlFor="lname">Last name: </label>
                            <div>
                                <input type="text" id="lname" />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles["form-group"]}`}>
                        <label htmlFor="email">Email address: </label>
                        <input type="email" id="email" />
                    </div>
                    <div className={`${styles["form-group"]}`}>
                        <label htmlFor="message">Message: </label>
                        <textarea id="message" cols="30" rows="5"></textarea>
                    </div>
                    <button className={`${styles["send-btn"]}`}>Send Message</button>
                </form >
                <article className={`${responsive["contact-info"]}`}>
                    <ul>
                        <li><i className="fas fa-map-marked-alt"></i>  Sofia, Studentski grad 4, Str.</li>
                        <li><i className="fas fa-phone-alt"></i>  +359 877040853</li>
                        <li><i className="fas fa-envelope"></i>  marti.sofroniev12@abv.bg</li>
                        <li><i className="fab fa-facebook-square"></i>  Martin Sofroniev</li>
                        <li><i className="fab fa-instagram"></i>  @martin13s18</li>
                        <li><i className="fab fa-github-square"></i>  Martin322s</li>
                    </ul>
                </article>
            </section >
        </>
    );
}
export default Contact;