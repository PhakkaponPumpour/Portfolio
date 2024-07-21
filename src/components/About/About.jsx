import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Programming.png")}
          alt="Me sitting with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Frontend Developer with a passion for creating dynamic and
                responsive web applications. Skilled in HTML, CSS, JavaScript,
                and frameworks like React.
              </p>
              <p>
                I enjoy solving complex problems and continuously learning new
                technologies to enhance my skills and build high-performance,
                accessible web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Backend Developer with a passion for creating efficient and
                scalable web applications. Skilled in Node.js, Express, and
                MongoDB. I enjoy solving complex problems and continuously
                learning new technologies to enhance my skills and build robust,
                high-performance applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/data.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analytic</h3>
              <p>
                I specialize in Data Analytics with expertise in ETL processes,
                PowerBI, and data visualization. I am passionate about
                transforming raw data into actionable insights and creating
                compelling visual reports to drive informed decision-making.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
