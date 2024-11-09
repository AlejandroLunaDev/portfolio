import Link from 'next/link';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.brand}>
      <Link href='/'>
        <span className={styles.logoContainer}>
          <span className={styles.name}>
            <span className={styles.char}>A</span>
            <span className={styles.char}>l</span>
            <span className={styles.char}>e</span>
            <span className={styles.char}>j</span>
            <span className={styles.char}>a</span>
            <span className={styles.char}>n</span>
            <span className={styles.char}>d</span>
            <span className={styles.char}>r</span>
            <span className={styles.char}>o</span>
            <span className={styles.space}> </span>
            <span className={styles.char}>L</span>
            <span className={styles.char}>u</span>
            <span className={styles.char}>n</span>
            <span className={styles.char}>a</span>
          </span>
        </span>
      </Link>
    </div>
  );
}
