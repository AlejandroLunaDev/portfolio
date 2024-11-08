import { TbHandClick } from 'react-icons/tb';
import PortfolioParagraph from '../portfolioParagraph/portfolioParagraph';
import styles from './taphint.module.scss';

export default function TapHint() {
  return (
    <div className={styles['tap-hint']}>
      <TbHandClick className={styles['tap-icon']} />
      <PortfolioParagraph paragraphText='Tap anywhere' />
    </div>
  );
}
