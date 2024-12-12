import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt= "Email icon"/>
            <a href="mailto:bryanaustin2004@gmail.com">bryanaustin2004@gmail.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon"/>
            <a href="https://www.linkedin.com/in/bryan-austin-suharta-207482288/">
                www.linkedin.com/in/bryan-austin-suharta-207482288
            </a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
            <a href="https://github.com/BryanAustinS">
            https://github.com/BryanAustinS        
            </a>
        </li>

    </ul>
    </footer>
  )
}
