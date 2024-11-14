'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './AnimatedD.module.scss';

interface HoverTextMapping {
  [key: string]: string;
}

interface LinksMapping {
  [key: string]: string;
}

export default function AnimatedWordD(): JSX.Element {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);

  const handleHover = (word: string) => {
    setHoveredWord(word);
  };

  const words: string[] = ['hello', 'i am', 'ale'];

  const hoverTexts: HoverTextMapping = {
    'hello': 'about',
    'i am': 'projects',
    'ale': 'contact',
  };

  const links: LinksMapping = {
    'hello': '/about',
    'i am': '/projects',
    'ale': '/contact',
  };

  return (
    <div className={styles.container}>
      {words.map((word, index) => (
        <div
          key={word}
          className={styles.wordContainer}
          onMouseEnter={() => handleHover(word)}
          onMouseLeave={() => setHoveredWord(null)}
        >
          <Link href={links[word]} className={`${styles.word} ${styles[`word${index + 1}`]}`}>
            {word}
          </Link>
          {hoveredWord === word && hoverTexts[word] && (
            <div className={styles.hoverText}>{hoverTexts[word]}</div>
          )}
        </div>
      ))}
    </div>
  );
}
