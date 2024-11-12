// ButtonAnimate.tsx
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import styles from './ButtonAnimate.module.scss';

interface ButtonAnimateProps {
  href?: string; // Si se pasa un href, el botón se comportará como un enlace
  download?: boolean; // Para indicar si es un botón de descarga
  children: React.ReactNode; // Para el contenido del botón
  hoverText?: React.ReactNode; // Texto que aparecerá en el hover
  onClick?: () => void; // Acción para el evento click
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
