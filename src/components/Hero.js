import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>{profile.name}</h1>
      <p>{profile.role}</p>
      <p>{profile.summary}</p>
    </motion.section>
  );
}

export default Hero;
