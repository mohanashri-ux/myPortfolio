import React from 'react';
import { profile } from '../data/profile';

function Certificates() {
  return (
    <section>
      <h2>Certificates</h2>
      <ul>
        {profile.certificates.map((cert, i) => (
          <li key={i}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}
export default Certificates;
