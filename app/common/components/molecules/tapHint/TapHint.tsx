import { IconType } from 'react-icons';
import styles from './taphint.module.scss';
import PortfolioParagraph from '../../atoms/portfolioParagraph/portfolioParagraph';
import { TbHandClick } from 'react-icons/tb';

interface TapHintProps {
  paragraphText?: string;
  Icon?: IconType; // Esto permite pasar cualquier icono desde `react-icons` o similar
}

export default function TapHint({
  paragraphText , // Texto predeterminado
  Icon = TbHandClick, // Icono predeterminado
}: TapHintProps) {
  return (
    <div className={styles['tap-hint']}>
      <Icon className={styles['tap-icon']} />
      <PortfolioParagraph paragraphText={paragraphText} />
    </div>
  );
}
