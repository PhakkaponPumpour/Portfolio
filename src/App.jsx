import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Footer } from "./components/Contact/Footer";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Project } from "./components/Projects/Project";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
      once: "true",
    });
  });
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
