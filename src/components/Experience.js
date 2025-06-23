import React from 'react';
import { profile } from '../data/profile';

function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      {profile.experience.map((exp, i) => (
        <div key={i}>
          <h3>{exp.title} – {exp.company}</h3>
          <p><i>{exp.duration}</i></p>
          <p>{exp.details}</p>
        </div>
      ))}
    </section>
  );
}
export default Experience;
