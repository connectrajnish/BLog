import React from 'react';
import './Header.css';

const Header = ({propWeaveOrExplore}) => {
  const clickHandlerExplore = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    propWeaveOrExplore("explore");
  };
  const clickHandlerWeave = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    propWeaveOrExplore("weave");
  };

  return (
    <header className="header">
      <div className="overlay">
        <h1>Word Weaver</h1>
        <h3>Everyone has a story.</h3>
        <button onClick={clickHandlerWeave}>Let's Weave</button>
        <button onClick={clickHandlerExplore}>Let's Explore</button>
      </div>
    </header>
  );
};

export default Header;
