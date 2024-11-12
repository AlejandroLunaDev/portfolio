
import styles from './SecondSlide.module.scss';

export default function SecondSlide() {




  return (
    <section  className={styles.info}>
      <div className={styles.design}>
        <span>desing</span>
        <p>
          🚀 As a frontend developer, I am passionate about blending creativity and functionality. My mission is to design intuitive and visually appealing interfaces, using cutting-edge tools to ensure an exceptional user experience and high-quality digital products.
        </p>
      </div>
      <div className={styles.dev}>
        <p>
          💫 I am convinced that the best way to master a skill is through constant practice. Creating is not only my job but also my learning method. Every project is an opportunity to innovate, learn, and refine my skills, always ensuring outstanding results.
        </p>
        <span className={styles.devSpan}>develpment</span>
      </div>
    </section>
  );
}
