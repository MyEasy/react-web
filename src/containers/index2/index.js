import React from 'react';

import './index.scss';

const Index = () => {

  const handleClick = () => {

    const btn = document.getElementById('btn');
    const particles = [];
    const color = randomColor();
    
    const particle = document.createElement('span');
    particle.classList.add('particle', 'move');
    
    const { x, y } = randomLocation();
    particle.style.setProperty('--x', x);
    particle.style.setProperty('--y', y);
    particle.style.background = color;
    btn.style.background = color;
    
    btn.appendChild(particle);
    
    particles.push(particle);
    
    setTimeout(() => {
    
      for(let i=0; i<100; i++) {
        const innerP = document.createElement('span');
        innerP.classList.add('particle', 'move');
        innerP.style.transform = `translate(${x}, ${y})`;

        const xs = Math.random() * 200 - 100 + 'px';
        const ys = Math.random() * 200 - 100 + 'px';
        innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
        innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
        innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
        innerP.style.background = color;
        
        btn.appendChild(innerP);
        particles.push(innerP)
      }
      
      setTimeout(() => {
        particles.forEach(particle => {
          particle.remove();
        })
      }, 1000)
    }, 1000);
  }

  function randomLocation() {
    return {
      x: Math.random() * window.innerWidth - window.innerWidth / 2 + 'px',
      y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px',
    }
  }

  function randomColor() {
    return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
  }

  return (
    <div className="main">
      <button id="btn" onClick={handleClick}>
        放烟花
      </button>
    </div>
  )
};

export default Index;