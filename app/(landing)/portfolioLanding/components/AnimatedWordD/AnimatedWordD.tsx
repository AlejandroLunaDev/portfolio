import Link from 'next/link';
import styles from './AnimatedD.module.scss';

export default function AnimatedWordD(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.wordContainer}>
        <Link href="/about" className={`${styles.word} ${styles.word1}`}>
          hello
        </Link>
        <div className={styles.hoverText}>about</div>
      </div>

      <div className={styles.wordContainer}>
        <Link href="/projects" className={`${styles.word} ${styles.word2}`}>
          i am
        </Link>
        <div className={styles.hoverText}>projects</div>
      </div>

      <div className={styles.wordContainer}>
        <Link href="/contact" className={`${styles.word} ${styles.word3}`}>
          ale
        </Link>
        <div className={styles.hoverText}>contact</div>
      </div>
    </div>
  );
}
