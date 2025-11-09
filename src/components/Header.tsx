import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('.header')?.clientHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false); // メニューを閉じる
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">tarotarotaros</div>

        {/* ハンバーガーメニューボタン */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ナビゲーション */}
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('about')} className="nav-link">自己紹介</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">技術スタック</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">成果物</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">アクティビティ</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
