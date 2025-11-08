import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">こんにちは、</span>
            <span className="name">あなたの名前</span>
          </h1>
          <p className="hero-subtitle">フルスタック開発者</p>
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
  name: "あなたの名前",
  location: "東京, 日本",
  skills: [
    "React", "Node.js",
    "TypeScript", "Python"
  ],
  passion: "素晴らしいものを作ること",
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
