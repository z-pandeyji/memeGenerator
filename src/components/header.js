import React from'react';

export default function Header(){
    return (
      <header>
        <img className="header-image" src="/images/face-meme-png.png" />
        <h2 className="header-title">Meme Generator</h2>
        <h4 className="header-connect">
          connect with me on:{' '}
          <a href="https://www.linkedin.com/in/shivanshu-pandey-ji/" target="_blank">
            LinkedIn
          </a>
        </h4>
      </header>
    );
}