import React from 'react';
import { profile } from '../data/profile';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
      <p>Phone: {profile.phone}</p>
      <p>Location: {profile.location}</p>
      <p>
        GitHub: <a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.github}</a>
      </p>
      <p>
        LinkedIn: <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a>
      </p>
      <p>
        LeetCode: <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">{profile.leetcode}</a>
      </p>
    </section>
  );
}
export default Contact;
