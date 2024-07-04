import React from "react";
import projects from "../data/project.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Project.module.css";

export const Project = () => {
  return (
    <section className={styles.container} id="project" >
      <h2 className={styles.title} >Project</h2>
      <div className={styles.projects}  >
        {projects.map((project, id) => {
          return (
            <ProjectCard key={id} project={project} />
          );
        })}
      </div>
    </section>
  );
};
