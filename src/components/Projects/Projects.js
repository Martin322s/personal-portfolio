import styles from "./styles/projects.module.css";
import responsive from "./styles/responsive.module.css";
import nutri from "./images/logo-nutri.png";
import cinema from "./images/cinema.png";
import share from "./images/share.png";

const Projects = () => {
    return (
        <>
            <h1 id="projects" className={`${styles["project-heading"]} ${responsive["project-heading"]}`}>Top 3 Personal Projects</h1>
            <section className={`${styles["projects"]} ${responsive["projects"]}`}>
                <article className={`${styles["article-project"]} ${responsive["article-project"]}`}>
                    <img className={`${styles["project-img"]}`} src={nutri} alt="project-img" />
                    <h2 className={`${styles["project-title"]}`}>NutriGit - Healthy food app</h2>
                    <h3 className={`${styles["project-details"]}`}>Project details: SPA</h3>
                    <p>Client-Side technologies: ReactJS, JavaScript, HTML, CSS</p>
                    <p>
                        Server-Side technologies: Express (NodeJS),
                        Handlebars, MongoDB with mongoose, Bcrypt and ect.
                    </p>
                    <p>
                        Client-side source code:
                        <a
                            href="https://github.com/Martin322s/healthy-food-app/tree/main/client"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://github.com/Martin322s/healthy-food-app/tree/main/client
                        </a>
                    </p>
                    <p>
                        Server-side source code:
                        <a
                            href="https://github.com/Martin322s/healthy-food-app/tree/main/server"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://github.com/Martin322s/healthy-food-app/tree/main/server
                        </a>
                    </p>
                </article>
                <article className={`${styles["article-project"]} ${responsive["article-project"]}`}>
                    <img 
                        className={`${styles["project-img-cinema"]}`} 
                        src={cinema} 
                        alt="project-img" 
                    />
                    <h2 className={`${styles["project-title"]}`}>Cinema City - Film library</h2>
                    <h3 className={`${styles["project-details"]}`}>Project details: SPA</h3>
                    <p>Client-Side technologies: ReactJS, JavaScript, HTML, CSS</p>
                    <p>
                        Server-Side technologies: Express (NodeJS), 
                        Handlebars, MongoDB with mongoose, Bcrypt and ect.
                    </p>
                    <p>
                        Client-side source code: 
                        <a 
                            href="https://github.com/MaRtin322s/film-library-project" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            https://github.com/MaRtin322s/film-library-project
                        </a>
                    </p>
                    <p>
                        Server-side source code: 
                        <a 
                            href="https://github.com/Martin322s/film-library-api.git" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            https://github.com/Martin322s/film-library-api.git
                        </a>
                    </p>
                </article>
                <article className={`${styles["article-project"]} ${responsive["article-project"]}`}>
                    <img className={`${styles["project-img"]}`} src={share} alt="project-img" />
                    <h2 className={`${styles["project-title"]}`}>Shared trips - Group travel</h2>
                    <h3 className={`${styles["project-details"]}`}>Project details: MPA</h3>
                    <p>Client-Side technologies: ReactJS, JavaScript, HTML, CSS</p>
                    <p>
                        Server-Side technologies: Express (NodeJS), 
                        Handlebars, MongoDB with mongoose, Bcrypt and ect.
                    </p>
                    <p>
                        Source code: 
                        <a 
                            href="https://github.com/Martin322s/softuni-shared-trips.git" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            https://github.com/Martin322s/softuni-shared-trips.git
                        </a>
                    </p>
                </article>
            </section>
        </>
    );
}
export default Projects;