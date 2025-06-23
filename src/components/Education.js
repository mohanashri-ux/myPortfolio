import React from 'react';
import { profile } from '../data/profile';

function Education() {
  return (
    <section>
      <h2>Education</h2>
      {profile.education.map((edu, i) => (
        <div key={i}>
          <h3>{edu.degree}</h3>
          <p>{edu.institution} — {edu.year}</p>
          <p>Score: {edu.score}</p>
        </div>
      ))}
    </section>
  );
}
export default Education;
