import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Your Name</span>
          </h1>
          <p className="hero-subtitle">Full Stack Developer</p>
          <p className="hero-description">
            I create modern web applications with clean code and intuitive user experiences.
            Passionate about building innovative solutions and learning new technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-buttons">
                <span className="btn-red"></span>
                <span className="btn-yellow"></span>
                <span className="btn-green"></span>
              </div>
              <span className="window-title">developer.js</span>
            </div>
            <div className="code-content">
              <pre><code>{`const developer = {
  name: "Your Name",
  location: "Tokyo, Japan",
  skills: [
    "React", "Node.js",
    "TypeScript", "Python"
  ],
  passion: "Building cool stuff",
  status: "Available for work"
};`}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
