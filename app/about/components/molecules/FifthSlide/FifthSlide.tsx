import ButtonAnimate from '../../../../common/components/atoms/ButtonAnimate/ButtonAnimate';
import styles from './FifthSlide.module.scss';

export default function FirstSlide() {
  return (
    <div className={styles.Links}>
      <div className={styles.proyectos}>
        <header>
          <h1>Build & Create</h1>
          <p>
            Design and build simple, intuitive, and scalable web products
          </p>
        </header>
        <ButtonAnimate href="/projects" hoverText="Go to Projects">
          View my projects
        </ButtonAnimate>
      </div>
      <div className={styles.curriculum}>
        <header>
          <h1>Curriculum Vitae</h1>
          <p>Learn more about my professional experience and skills</p>
        </header>
        <ButtonAnimate href="/files/en-CV.pdf" download hoverText="Download CV">
          Download Curriculum Vitae
        </ButtonAnimate>
      </div>
    </div>
  );
}
