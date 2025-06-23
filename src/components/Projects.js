// import React from 'react';
// import { profile } from '../data/profile';

// function Projects() {
//   return (
//     <section>
//       <h2>Projects</h2>
//       {profile.projects.map((proj, idx) => (
//         <div key={idx} className="project-card">
//           <h3>{proj.title}</h3>
//           <p>{proj.description}</p>
//           <p><strong>Tech:</strong> {proj.tech.join(', ')}</p>
//           <p><b>GitHub link:</b> <a href="https://github.com/mohanashri-ux/metahush.git" target="_blank">https://github.com/mohanashri-ux/metahush.git</a></p>

//         </div>
//       ))}
//     </section>
//   );
// }

// export default Projects;

import React from 'react';
import { profile } from '../data/profile';

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      {profile.projects.map((project, i) => (
        <div key={i} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech:</strong> {project.tech.join(', ')}</p>
        </div>
      ))}
    </section>
  );
}
export default Projects;
