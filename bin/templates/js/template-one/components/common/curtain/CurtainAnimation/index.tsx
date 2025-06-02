'use client'
import { useEffect, useState } from 'react';
import styles from './Curtain.module.css';

const Curtain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleSpaceKey = (event: KeyboardEvent) => {
      if (event.keyCode === 13) {
        showTime();
      }
    };

    window.addEventListener('keydown', handleSpaceKey);

    return () => {
      window.removeEventListener('keydown', handleSpaceKey);
    };
  }, []);

  const showTime = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowText(true);
    }, 3000); // 3s delay for the text to show up
  };

  return (
    <div>
      {/* Starter button */}
      <div id="starter" className={styles.starter} onClick={showTime}>
        Start
      </div>

      {/* Curtain */}
      <div id="curtain" className={`${styles.curtain} ${isOpen ? styles.open : ''}`}>
        <div className={`${styles.left} ${isOpen ? styles.leftOpen : ''}`}></div>
        <div className={`${styles.right} ${isOpen ? styles.rightOpen : ''}`}></div>
      </div>

      {/* Scene */}
      <div id="scene" className={`${styles.scene} ${isOpen ? styles.expand : ''}`}>
        <div className={styles.ground}></div>
        <h1 className={`${styles.title} ${showText ? styles.visible : ''}`}>Welcome!</h1>
      </div>
    </div>
  );
};

export default Curtain;
