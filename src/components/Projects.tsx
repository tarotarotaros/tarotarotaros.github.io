import React from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  article?: string;
}

const Projects: React.FC = () => {
  // 技術スタックの色マッピング
  const techColors: { [key: string]: string } = {
    'React': '#61DAFB',
    'Next.js': '#000000',
    'next.js': '#000000',
    'Node.js': '#339933',
    'TypeScript': '#3178C6',
    'JavaScript': '#F7DF1E',
    'Python': '#3776AB',
    'PHP': '#777BB4',
    'php': '#777BB4',
    'Rust': '#CE412B',
    'Kotlin': '#7F52FF',
    'C#': '#239120',
    'C': '#A8B9CC',
    'Flutter': '#02569B',
    'Tauri2.0': '#FFC131',
    'PostgreSQL': '#4169E1',
    'MySQL': '#4479A1',
    'Oracle': '#F80000',
    'SQLite': '#003B57',
    'Firebase': '#FFCA28',
    'FireBase': '#FFCA28',
    'TensorFlow': '#FF6F00',
    'PyTorch': '#EE4C2C',
    'Tailwind': '#06B6D4',
    'TailwindCSS': '#06B6D4'
  };

  const getTechColor = (tech: string): string => {
    return techColors[tech] || '#667eea';
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'タスク管理アプリ',
      description: 'シンプルなUIでわかりやすくタスクを管理。カンバンボード、マークダウン対応、担当者管理機能を備えたチームタスク管理ツール',
      technologies: ['React', 'php', 'TypeScript', 'Tailwind'],
      image: '🪧',
      github: 'https://github.com/tarotarotaros/TaskAppView',
      article: 'https://zenn.dev/tarotarotaros/articles/2024-10-18_1'
    },
    {
      id: 2,
      title: '頭痛記録アプリ',
      description: '生成AIの力を借りて半日で作成した頭痛専用記録アプリ。Googleスプレッドシートと連携し、スマホから簡単に記録できるAndroidアプリ',
      technologies: ['Flutter'],
      image: '🤕',
      github: 'https://github.com/tarotarotaros/MyHeadacheApp',
      article: 'https://zenn.dev/tarotarotaros/articles/2025-01-11_1'
    },
    {
      id: 3,
      title: 'プロジェクト計画アプリ',
      description: 'Tauri 2.0とReact Flowでプロセスフローを可視化。タスクと成果物の依存関係を直感的に把握できるオフライン対応デスクトップアプリ',
      technologies: ['Tauri2.0', 'Rust', 'SQLite', 'React'],
      image: '🗓️',
      github: 'https://github.com/tarotarotaros/AIR-Project',
      article: 'https://zenn.dev/tarotarotaros/articles/2025-11-16_1'
    },
    {
      id: 4,
      title: 'バイク駐輪場共有アプリ',
      description: 'バイクの駐輪場をサービス内で共有するアプリ',
      technologies: ['next.js', 'TypeScript', 'FireBase'],
      image: '🏍️',
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">成果物</h2>
        <p className="section-subtitle">作品をご紹介します</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="tech-tag"
                    style={{
                      backgroundColor: `${getTechColor(tech)}20`,
                      borderColor: getTechColor(tech),
                      color: getTechColor(tech) === '#000000' ? '#ffffff' : getTechColor(tech)
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
                {project.article && (
                  <a href={project.article} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>Article</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
