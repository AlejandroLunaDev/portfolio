/* eslint-disable react/prop-types */
/* PresentationProjectOption.jsx */

import SliderParagraph from '@/app/shared/components/SliderParagraph/SliderParagraph';
import styles from './ProjectsFristSlide.module.scss';

export default function ProjectsFirstSlide()  {
  /*   const projects = [
    {
      id: 1,
      mediaUrl:
       easyTurnos,
      onClick: scrollToProjectOne,
      name: 'Easy Turnos'
    },
    {
      id: 2,
      mediaUrl:
     siLouso,
      onClick: scrollToProjectTwo,
      name: 'SiLoUso'
    },
    {
      id: 3,
      mediaUrl:
      windowsClone,
      onClick: scrollToProjectThree,
      name: 'Windows 11 Clone'
    }
  ]; */

  return (
    <section className={styles.projectsContainer}>
      <SliderParagraph title='Projects' text='Design and build simple, intuitive, and scalable web products' />
    </section>
  );
};


