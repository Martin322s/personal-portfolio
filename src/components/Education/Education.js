import styles from "./styles/education.module.css";

const Education = () => {
    return (
        <>
            <h1 className={`${styles["education-heading"]}`}>Education and Courses</h1>
            <section className={`${styles["education"]}`}>
                <article className={`${styles["premier"]}`}>
                    <h1 className={`${styles["premier-title"]}`}>Technical University - Sofia (09/2020 - Present)</h1>
                    <h3>Specialization: Information technology in the industry (ITI)</h3>
                    <ul>
                        <li>C++ OOP Fundamentals</li>
                        <li>Operating systems</li>
                        <li>Computer networking</li>
                        <li>Computer architectures</li>
                        <li>SQL Databases (MySQL)</li>
                        <ul>
                            <li>Entity relationship (ER) diagrams</li>
                            <li>Data types in MySQL</li>
                            <li>Create/Alter table</li>
                            <li>Constraints, insert, delete statements</li>
                            <li>Select queries, JOIN's</li>
                            <li>Views, cascading functions</li>
                            <li>Transactions, Procedures</li>
                            <li>Logical operators, loops</li>
                            <li>Cursors, triggers and events</li>
                        </ul>
                    </ul>
                </article>
                <article className={`${styles["premier"]}`}>
                    <h1
                        className={`${styles["premier-title"]}`}
                    >
                        Software University (SoftUni) (06/2021 - 12/2021)
                    </h1>
                    <p>Certificates:</p>
                    <p>
                        <a
                            href="https://softuni.bg/Certificates/Details/119846/33310330"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://softuni.bg/Certificates/Details/119846/33310330
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://softuni.bg/Certificates/Details/109760/da7bc71a"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://softuni.bg/Certificates/Details/109760/da7bc71a
                        </a>
                    </p>
                    <h3>Module: JavaScript Fundamentals 2021</h3>
                    <ul>
                        <li>Conditional Statements</li>
                        <li>Loops and nested loops</li>
                        <li>Arrays and functions</li>
                        <li>Objects and classes</li>
                        <li>Test processing and Regular Expressions</li>
                    </ul>
                </article>
                <article className={`${styles["premier"]}`}>
                    <h1
                        className={`${styles["premier-title"]}`}
                    >
                        Software University (SoftUni) (01/2022 - 04/2022)
                    </h1>
                    <p>Certificates:</p>
                    <p>
                        <a
                            href="https://softuni.bg/Certificates/Details/150178/5ffc9922"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://softuni.bg/Certificates/Details/150178/5ffc9922
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://softuni.bg/Certificates/Details/153052/8aae6bc4"
                            target="_blank"
                            rel="noreferrer"
                        >

                            https://softuni.bg/Certificates/Details/153052/8aae6bc4
                        </a>
                    </p>
                    <h3>Module: JavaScript Advanced 2022</h3>
                    <ul>
                        <li>Arrays and Nested Arrays</li>
                        <li>Objects and Composition</li>
                        <li>DOM Manipulations and Events</li>
                        <li>Advanced Functions</li>
                        <li>Unit Testing and Error Handling</li>
                        <li>Classes, Prototypes and Inheritance</li>
                        <li>HTTP and REST Services</li>
                        <li>Asynchronous Programming (Promises, Async/Await)</li>
                        <li>Single Page Applications</li>
                        <li>Client Side Rendering and Routing</li>
                    </ul>
                </article>
                <article className={`${styles["premier"]}`}>
                    <h1
                        className={`${styles["premier-title"]}`}
                    >
                        Software University (SoftUni) (09/2022 - 12/2022)
                    </h1>
                    <p>Certificates:</p>
                    <p>
                        <a
                            href="https://softuni.bg/Certificates/Details/146819/92b53ff9"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://softuni.bg/Certificates/Details/146819/92b53ff9
                        </a>
                    </p>
                    <p>
                        <a
                            href="https://softuni.bg/Certificates/Details/170039/8a356289"
                            target="_blank"
                            rel="noreferrer"
                        >

                            https://softuni.bg/Certificates/Details/170039/8a356289
                        </a>
                    </p>
                    <h3>Module: JavaScript Web 2022 (NodeJS / ReactJS)</h3>
                    <ul>
                        <li>Node.js Streams and Utilities</li>
                        <li>ExpressJS and Handlebars</li>
                        <li>NoSQL and MongoDB (mongoose)</li>
                        <li>Sessions and Authentication</li>
                        <li>Validation and Error Handling</li>
                        <li>React (JSX, virtual DOM, state/props)</li>
                        <li>Functional components</li>
                        <li>Routing, Forms and Hooks</li>
                        <li>Advanced techniques (reducers and unit testing)</li>
                        <li>Context API, Lazy loading and Suspense, HOC</li>
                    </ul>
                </article>
                <article className={`${styles["premier"]}`}>
                    <h1
                        className={`${styles["premier-title"]}`}
                    >
                        Software University (SoftUni) (01/2023 - 03/2023)
                    </h1>
                    <p>Certificates:</p>
                    <p>
                        <a
                            href="https://softuni.bg/Certificates/Details/163170/395647b6"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://softuni.bg/Certificates/Details/163170/395647b6
                        </a>
                    </p>
                    <h3>Course: HTML & CSS</h3>
                    <ul>
                        <li>Semantical HTML Structure</li>
                        <li>CSS & Typography</li>
                        <li>CSS Box Model</li>
                        <li>Positioning & Grid</li>
                        <li>CSS Flexbox</li>
                        <li>Responsive Web design and Media Queries</li>
                    </ul>
                </article>
            </section>
        </>
    );
}
export default Education;