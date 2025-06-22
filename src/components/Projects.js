import React from 'react';
import { profile } from '../data/profile';

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {profile.projects.map((proj, idx) => (
        <div key={idx} className="project-card">
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <p><strong>Tech:</strong> {proj.tech.join(', ')}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
