import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Bryan</h1>
            <p className={styles.description}>
              I'm a Computer Science student at Hochschule Darmstadt with a strong passion
              for technology and innovation. Driven by a commitment to continuous learning,
              I am an enthusiastic student ready to make a positive impact in the tech industry
              </p>
            <a className={styles.contactBtn} href="mailto:bryanaustin2004@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
        
    </section>
  );
}
