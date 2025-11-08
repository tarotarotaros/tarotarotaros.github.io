import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'プログラミング言語',
      skills: [
        { name: 'C#', color: '#239120' },
        { name: 'C', color: '#A8B9CC' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Python', color: '#3776AB' },
        { name: 'PHP', color: '#777BB4' },
        { name: 'Rust', color: '#CE412B' },
        { name: 'Kotlin', color: '#7F52FF' }
      ]
    },
    {
      title: 'フレームワーク',
      skills: [
        { name: 'React', color: '#61DAFB' },
        { name: 'Next.js', color: '#000000' },
        { name: 'Node.js', color: '#339933' },
        { name: 'Flutter', color: '#02569B' },
        { name: 'Tauri2.0', color: '#FFC131' },
      ]
    },
    {
      title: 'データベース',
      skills: [
        { name: 'PostgreSQL', color: '#4169E1' },
        { name: 'MySQL', color: '#4479A1' },
        { name: 'Oracle', color: '#F80000' },
      ]
    },
    {
      title: 'AI/機械学習',
      skills: [
        { name: 'TensorFlow', color: '#FF6F00' },
        { name: 'PyTorch', color: '#EE4C2C' },
        { name: 'Claude Code', color: '#D97757' },
        { name: 'Roo Code', color: '#FFA500' },
        { name: 'GitHub Copilot', color: '#6CC644' },
        { name: 'Vertex AI', color: '#4285F4' },
        { name: 'LiteLLM', color: '#8A2BE2' }
      ]
    },
    {
      title: 'クラウド',
      skills: [
        { name: 'Firebase', color: '#FFCA28' }
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
