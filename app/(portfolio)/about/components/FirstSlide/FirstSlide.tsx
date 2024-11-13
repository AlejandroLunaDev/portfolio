
import SliderParagraph from '@/app/shared/components/SliderParagraph/SliderParagraph';
import styles from './FirstSlide.module.scss';


export default function FirstSlide() {
  return (
    <article className={styles.hero}>
      <SliderParagraph title='Creative Frontend Developer' text='Designing and building of simple,intuitive and scalable web products is my calling.' />
    </article>
  );
}
