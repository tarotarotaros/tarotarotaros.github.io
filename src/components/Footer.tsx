import React, { useState, useEffect } from 'react';
import './Footer.css';

interface ZennArticle {
  id: number;
  title: string;
  emoji: string;
  published_at: string;
  path: string;
  liked_count: number;
}

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const [zennArticles, setZennArticles] = useState<ZennArticle[]>([]);

  // JSONファイルから記事データを読み込む
  useEffect(() => {
    fetch('/zenn-articles.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        return response.json();
      })
      .then((data) => setZennArticles(data))
      .catch((error) => {
        console.error('Error loading Zenn articles:', error);
        // フォールバック: エラー時は空配列を設定
        setZennArticles([]);
      });
  }, []);

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h2 className="footer-title">アクティビティ</h2>
        <p className="footer-subtitle"></p>

        <div className="activity-cards-container">
          {/* Zenn Card */}
          <div className="activity-card zenn-card">
            <div className="activity-card-header">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="activity-icon">
                <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176-.029.41.234.41zm17.181 0h6.079c.352 0 .615-.322.469-.645l-2.987-6.49c-.088-.176-.264-.293-.469-.293h-3.85c-.352 0-.615.322-.469.645l2.781 6.49c.088.176.264.293.44.293z" />
              </svg>
              <h3 className="activity-card-title">Zenn</h3>
            </div>
            <div className="zenn-articles-list">
              {zennArticles.map((article) => (
                <a
                  key={article.id}
                  href={`https://zenn.dev${article.path}`}
                  className="zenn-article-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="zenn-article-emoji">{article.emoji}</div>
                  <div className="zenn-article-info">
                    <h4 className="zenn-article-title">{article.title}</h4>
                    <div className="zenn-article-meta">
                      <span className="zenn-article-date">
                        {new Date(article.published_at).toLocaleDateString('ja-JP', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="zenn-article-likes">♥ {article.liked_count}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <a href="https://zenn.dev/tarotarotaros" className="activity-link" target="_blank" rel="noopener noreferrer">
              もっと見る
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* GitHub Card */}
          <div className="activity-card github-card">
            <div className="activity-card-header">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="activity-icon">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <h3 className="activity-card-title">GitHub</h3>
            </div>
            <div className="github-contributions">
              <img
                src="https://ghchart.rshah.org/tarotarotaros"
                alt="GitHub Contributions"
              />
            </div>
            <a href="https://github.com/tarotarotaros" className="activity-link" target="_blank" rel="noopener noreferrer">
              プロフィールを見る
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="social-links" style={{ display: 'none' }}>
          <a href="https://github.com/tarotarotaros" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a href="https://zenn.dev/tarotarotaros" className="social-link" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176-.029.41.234.41zm17.181 0h6.079c.352 0 .615-.322.469-.645l-2.987-6.49c-.088-.176-.264-.293-.469-.293h-3.85c-.352 0-.615.322-.469.645l2.781 6.49c.088.176.264.293.44.293z" />
            </svg>
            <span>Zenn</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} tarotarotaros</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
