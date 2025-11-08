import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">tarotarotaros</div>
        <nav className="nav">
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
