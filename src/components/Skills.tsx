import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'プログラミング言語',
      skills: [
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Python', color: '#3776AB' },
        { name: 'Java', color: '#007396' },
        { name: 'C#', color: '#239120' },
        { name: 'Go', color: '#00ADD8' },
      ]
    },
    {
      title: 'フレームワーク',
      skills: [
        { name: 'React', color: '#61DAFB' },
        { name: 'Vue.js', color: '#4FC08D' },
        { name: 'Next.js', color: '#000000' },
        { name: 'Node.js', color: '#339933' },
        { name: 'Django', color: '#092E20' },
        { name: 'Spring Boot', color: '#6DB33F' },
      ]
    },
    {
      title: 'データベース',
      skills: [
        { name: 'PostgreSQL', color: '#4169E1' },
        { name: 'MySQL', color: '#4479A1' },
        { name: 'MongoDB', color: '#47A248' },
        { name: 'Redis', color: '#DC382D' },
        { name: 'SQLite', color: '#003B57' },
      ]
    },
    {
      title: 'AI開発',
      skills: [
        { name: 'TensorFlow', color: '#FF6F00' },
        { name: 'PyTorch', color: '#EE4C2C' },
        { name: 'OpenAI API', color: '#412991' },
        { name: 'LangChain', color: '#1C3C3C' },
        { name: 'Hugging Face', color: '#FFD21E' },
      ]
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="skills-title">技術スタック</h2>
        <p className="skills-description">
          これまでに使用したことのある技術やツールです
        </p>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-chips">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-chip"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      borderColor: skill.color,
                      color: skill.color === '#000000' ? '#ffffff' : skill.color
                    }}
                  >
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
