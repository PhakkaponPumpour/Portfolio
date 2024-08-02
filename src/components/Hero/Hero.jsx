import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} data-aos="fade-right">
          Hi, I'm Phakkapon{" "}
        </h1>
        <p className={styles.description} data-aos="fade-up">
          "Fresh graduate student who passionate the most in working in
          Programming and Data"
        </p>
        <a
          href="mailto:phakkaponpumpour@gmail.com"
          className={styles.contactBtn}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/proflieImage.png")}
        alt="Her"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.buttomBlur} />
    </section>
  );
};
