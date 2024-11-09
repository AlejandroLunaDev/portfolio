import { TbHandClick } from 'react-icons/tb';

import styles from './taphint.module.scss';
import PortfolioParagraph from '../../atoms/portfolioParagraph/portfolioParagraph';

export default function TapHint() {
  return (
    <div className={styles['tap-hint']}>
      <TbHandClick className={styles['tap-icon']} />
      <PortfolioParagraph paragraphText='Tap anywhere' />
    </div>
  );
}
