import React from 'react'
import projects from "../../data/projects.json"
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({
    project: {title, imageSrc, description, skills, source}
}) => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={title} className={styles.image}></img>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill, skillId) => (
            <li className={styles.skill} key={skillId}>{skill}</li>
        ))}
        </ul>
        <div className={styles.link}>
            <a href={source}>Source</a>
        </div>
    </div>
  );
}
