'use client';
import React, { useRef } from 'react';
import styles from './AnimatedWord.module.scss';
import Link from 'next/link';
import useHover from '../../../../hooks/useHover';

interface AnimatedWordProps {
  text: string;
  animationDelay: number;
  hoverText?: string;
  href?: string;
  className?: string;
}

export default function AnimatedWord({
  text,
  hoverText,
  href,
  animationDelay
}: AnimatedWordProps): JSX.Element {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const isHovering = useHover(linkRef);

  return (
    <Link
      href={href || '#'}
      className={styles['animated-word']}
      ref={linkRef}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {isHovering && hoverText ? hoverText : text}
    </Link>
  );
}
