import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Phakkapon&#128075; </h1>
        <p className={styles.description}>"Fresh graduate student who passionate the most in working in Programming and Data"</p>
        <a href="mailto:phakkaponpumpour@gmail.com" className={styles.contactBtn}>
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
