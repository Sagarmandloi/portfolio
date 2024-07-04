import React from "react";
import TextTransition, { presets } from 'react-text-transition';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


const TEXTS = ['full-stack ', 'front-end', 'backend'];

export const Hero = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm sagar</h1>
        <p className={styles.description}>
        <h1>
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]} developer</TextTransition>
    </h1>
        </p>
        <a href="mailto:sagarmca24@ipsacademy.org" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/sagar2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
