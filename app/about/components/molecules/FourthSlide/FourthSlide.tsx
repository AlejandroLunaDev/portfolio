'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Importar motion desde framer-motion
import MilestoneCard from './components/MilestoneCard/MilestoneCard';
import styles from './FourthSlide.module.scss';

const FourthSlide = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting);  // Verificar si la sección está en el viewport
          if (entry.isIntersecting) {
            setIsInView(true);  // Activar la animación cuando el contenedor está en el viewport
          } else {
            setIsInView(false); // Desactivar la animación cuando el contenedor no está en el viewport
          }
        });
      },
      {
        threshold: 0.5, // Se activará cuando el 50% del contenedor sea visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={styles.container}
      initial={{ opacity: 0 }} // Empieza con opacidad 0
      animate={{ opacity: isInView ? 1 : 0 }} // Se hace visible cuando está en el viewport
      transition={{ duration: 1 }}
    >
      <header>
        <h1>Experience</h1>
      </header>

      {isInView && (
        <>
          <motion.div
            className={styles['milestone-card']}
            initial={{ opacity: 0, x: 100 }} // Comienza con opacidad 0 y desplazado a la derecha
            animate={{ opacity: 1, x: 0 }} // Animación de entrada (viene de la derecha)
            transition={{ duration: 0.6 }}
          >
            <MilestoneCard
              title="Frontend Developer"
              period="Sep 2024 - Oct 2024"
              company="No-Country"
              description="I developed an application using Next.js, Tailwind, and Zustand, integrating a vacation management and attendance control system via APIs. Additionally, I designed the user interface, created employee and vacation request forms, and developed an interactive circular menu with Shadcn. I also took on the role of UX/UI Designer, ensuring the design was aligned with the project's needs."
            />
          </motion.div>

          <motion.div
            className={styles['milestone-card']}
            initial={{ opacity: 0, x: -100 }} // Comienza con opacidad 0 y desplazado a la izquierda
            animate={{ opacity: 1, x: 0 }} // Animación de entrada (viene de la izquierda)
            transition={{ duration: 0.6 }}
          >
            <MilestoneCard
              title="Frontend Developer"
              period="Aug 2024 - Sep 2024"
              company="No-Country"
              description="Developed layouts and core functionalities for mentor, review, and landing pages using React and Tailwind. Created a temporary backend with Node.js and MongoDB in the absence of a backend team, enabling continuous progress. Led daily stand-ups and coordinated a team of 12 to meet sprint deadlines, fostering collaboration and clear communication."
            />
          </motion.div>

          <motion.div
            className={styles['milestone-card']}
            initial={{ opacity: 0, x: 100 }} // Comienza con opacidad 0 y desplazado a la derecha
            animate={{ opacity: 1, x: 0 }} // Animación de entrada (viene de la derecha)
            transition={{ duration: 0.6 }}
          >
            <MilestoneCard
              title="Frontend Developer"
              period="Jun 2024 - Jul 2024"
              company="No-Country"
              description="Led sprint planning and task distribution, collaborating closely with other team leads to ensure smooth integration. Resolved technical challenges and implemented TypeScript to enhance calendar functionality, working within a 15-person team to drive project success."
            />
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default FourthSlide;
