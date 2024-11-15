import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './AnimatedD.module.scss';

export default function AnimatedWordD(): JSX.Element {
  const t = useTranslations(); // Accede a las traducciones

  return (
    <div className={styles.container}>
      <div className={styles.wordContainer}>
        <Link href="/about" className={`${styles.word} ${styles.word1}`}>
          {t('words.hello')} {/* Aquí se traduce "hello" */}
        </Link>
        <div className={styles.hoverText}>{t('links.about')}</div> {/* Aquí se traduce "About" */}
      </div>

      <div className={styles.wordContainer}>
        <Link href="/projects" className={`${styles.word} ${styles.word2}`}>
          {t('words.iam')} {/* Aquí se traduce "i am" */}
        </Link>
        <div className={styles.hoverText}>{t('links.projects')}</div> {/* Aquí se traduce "Projects" */}
      </div>

      <div className={styles.wordContainer}>
        <Link href="/contact" className={`${styles.word} ${styles.word3}`}>
          {t('words.ale')} {/* Aquí se traduce "ale" */}
        </Link>
        <div className={styles.hoverText}>{t('links.contact')}</div> {/* Aquí se traduce "Contact" */}
      </div>
    </div>
  );
}
