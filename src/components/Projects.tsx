import React from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'ECサイトプラットフォーム',
      description: '決済連携、商品管理、ユーザー認証機能を備えたフルスタックのECアプリケーションです。',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      github: 'https://github.com/yourusername/project1',
      demo: 'https://demo.example.com'
    },
    {
      id: 2,
      title: 'タスク管理アプリ',
      description: 'リアルタイム更新、チームワークスペース、進捗追跡機能を持つ協働タスク管理ツールです。',
      technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
      image: '📋',
      github: 'https://github.com/yourusername/project2',
      demo: 'https://demo.example.com'
    },
    {
      id: 3,
      title: '天気予報ダッシュボード',
      description: '位置情報ベースの予報、インタラクティブマップ、天気アラート機能を備えたレスポンシブな天気アプリです。',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js'],
      image: '🌤️',
      github: 'https://github.com/yourusername/project3',
      demo: 'https://demo.example.com'
    },
    {
      id: 4,
      title: 'ポートフォリオジェネレーター',
      description: 'カスタマイズ可能なテーマとテンプレートで、開発者が美しいポートフォリオサイトを作成できるツールです。',
      technologies: ['Next.js', 'Markdown', 'Styled Components'],
      image: '🎨',
      github: 'https://github.com/yourusername/project4',
      demo: 'https://demo.example.com'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">注目プロジェクト</h2>
        <p className="section-subtitle">最近の作品をご紹介します</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                  <span>デモ</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
