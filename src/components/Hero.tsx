import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="avatar-container">
            <div className="avatar">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="url(#avatarGradient)"/>
                <circle cx="50" cy="40" r="15" fill="rgba(255,255,255,0.9)"/>
                <circle cx="50" cy="75" r="22" fill="rgba(255,255,255,0.9)"/>
                <defs>
                  <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#667eea', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#764ba2', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <h1 className="hero-title">
            <span className="greeting">こんにちは、</span>
            <span className="name">tarotarotaros</span>
          </h1>
          <p className="hero-subtitle">フルスタックエンジニア</p>
          <p className="hero-description">
            クリーンなコードと直感的なユーザー体験を持つ、モダンなWebアプリケーションを開発しています。
            革新的なソリューションの構築と新しい技術の習得に情熱を注いでいます。
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">プロジェクトを見る</a>
            <a href="#contact" className="btn btn-secondary">お問い合わせ</a>
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
              <span className="window-title">developer.ts</span>
            </div>
            <div className="code-content">
              <pre><code>{`const developer = {
  name: "tarotarotaros",
  location: "大阪, 日本",
  favorite: [
    "AI使用開発",
    "テストファースト"
  ]
  passion: "素早い開発",
  status: "お仕事募集中"
};`}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
