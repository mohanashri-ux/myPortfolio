import React from 'react';
import { profile } from '../data/profile';

function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <ul className="skill-list">
        {profile.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;
