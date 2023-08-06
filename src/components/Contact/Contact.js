import { useState } from "react";
import styles from "./styles/contact.module.css";
import responsive from "./styles/responsive.module.css";
import * as service from "../../services/contactService";

const Contact = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    const submitHandler = (ev, contactData) => {
        ev.preventDefault();
        
        if (Object.values(contactData).some(x => x === "")) {
            alert("All fields are required!");
        } else {
            service.contactEmail(contactData)
                .then(res => console.log(res));
        }
    };

    return (
        <>
            <h1 id="contact" className={`${styles["contact-heading"]} ${responsive["contact-heading"]}`}>Contact me</h1>
            <section className={`${styles["contact-section"]} ${responsive["contact-section"]}`}>
                <form
                    className={`
                        ${styles["contact-form"]} 
                        ${responsive["contact-form"]}`
                    }
                    onSubmit={(ev) => submitHandler(ev, data)}
                >
                    <div className={`${styles["form-group-one"]} ${responsive["form-group-one"]}`}>
                        <div>
                            <label htmlFor="fname">First name: </label>
                            <div>
                                <input
                                    type="text"
                                    id="fname"
                                    name="firstName"
                                    onChange={(ev) => changeHandler(ev)}
                                    value={data.firstName}
                                />
                            </div>
                        </div>
                        <div className={`${styles["form-group"]}`}>
                            <label className={`${responsive["lname"]}`} htmlFor="lname">Last name: </label>
                            <div>
                                <input
                                    type="text"
                                    id="lname"
                                    name="lastName"
                                    onChange={(ev) => changeHandler(ev)}
                                    value={data.lastName}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles["form-group"]}`}>
                        <label htmlFor="email">Email address: </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={(ev) => changeHandler(ev)}
                            value={data.email}
                        />
                    </div>
                    <div className={`${styles["form-group"]}`}>
                        <label htmlFor="message">Message: </label>
                        <textarea
                            id="message"
                            cols="30"
                            rows="5"
                            name="message"
                            onChange={(ev) => changeHandler(ev)}
                            defaultValue={data.message}
                        >
                            
                        </textarea>
                    </div>
                    <button className={`${styles["send-btn"]}`}>Send Message</button>
                </form >
                <article className={`${responsive["contact-info"]}`}>
                    <ul>
                        <li><i className="fas fa-map-marked-alt"></i>  Sofia, Studentski grad 4, Str.</li>
                        <li><i className="fas fa-phone-alt"></i>  +359 877040853</li>
                        <li><i className="fas fa-envelope"></i>  m.sofroniev12@gmail.com</li>
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