// ButtonAnimate.tsx
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import styles from './ButtonAnimate.module.scss';

interface ButtonAnimateProps {
  href?: string; 
  download?: boolean; 
  children: React.ReactNode;
  hoverText?: React.ReactNode 
  onClick?: () => void; 
}

export default function ButtonAnimate({
  href,
  download,
  children,
  hoverText,
  onClick,
}: ButtonAnimateProps) {
  const isLink = Boolean(href);

  return isLink ? (
    <a
      href={href}
      download={download}
      className={styles.animatedLink}
      onClick={onClick}
    >
      <span className={styles.defaultText}>{children}</span>
      <span className={styles.hoverContent}>
        {hoverText || children} <MdOutlineKeyboardDoubleArrowRight />
      </span>
    </a>
  ) : (
    <button className={styles.animatedButton} onClick={onClick}>
      <span className={styles.defaultText}>{children}</span>
      <span className={styles.hoverContent}>
        {hoverText || children} <MdOutlineKeyboardDoubleArrowRight />
      </span>
    </button>
  );
}
