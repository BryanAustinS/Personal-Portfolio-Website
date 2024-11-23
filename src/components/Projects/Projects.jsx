import React from 'react';
import { getImageUrl } from '../../utils'

import projects from "../../data/projects.json";

export const Project = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {
          projects.map((project, id) => {
            return <div key={id}>
              <img src={getImageUrl(project.imageSrc)} alt={project.title}></img>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {projects.skills.map(skill, id => {
                  <li key={id}>
                    {skill}
                  </li>
                })}
              </ul>

              <div>
                <a href={project.source}>Source</a>
              </div>
            </div>
          })
        }
      </div>
    </section> 
  );
}
