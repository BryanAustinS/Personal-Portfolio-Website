import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <p className={styles.intro}>Hi, my name is</p>
            <h2 className={styles.name}>Bryan Austin</h2>
            <p className={styles.description}>
              I'm a Computer Science student at Hochschule Darmstadt with a strong passion
              for Backend Development. Driven by a commitment to continuous learning,
              I am an enthusiastic student ready to make a positive impact in the tech industry. <a 
              className={styles.cvlink} href="/assets/hero/Resume_Bryan_Austin_Suharta.pdf" target="_blank" rel="noopener noreferrer"> 
              Here is more about me
              </a>.
              </p>
            <a className={styles.contactButton} href="mailto:bryanaustin2004@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl("hero/profilepic.jpg")} alt="Hero image of me" className={styles.heroImg}/> 
    </section>
  );
}
