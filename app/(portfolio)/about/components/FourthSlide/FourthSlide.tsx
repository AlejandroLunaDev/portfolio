/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import MilestoneCard from './components/MilestoneCard/MilestoneCard';
import styles from './FourthSlide.module.scss';

const projects = [
  {
    title: "Frontend Developer",
    period: "Sep 2024 - Oct 2024",
    company: "Workwise",
    description:
      "As part of a 6-person team, I contributed to the development of an application using Next.js, Tailwind, and Zustand, integrating a vacation management and attendance control system via APIs. My responsibilities included designing the user interface, creating employee and vacation request forms, and developing an interactive circular menu with Shadcn. Additionally, I collaborated closely with the UX/UI team to ensure the design aligned with the project's goals and requirements."
  },
  {
    title: "Frontend Developer",
    period: "Aug 2024 - Sep 2024",
    company: "Mentos",
    description:
      "Developed layouts and core functionalities for mentor, review, and landing pages using React and Tailwind. Created a temporary backend with Node.js and MongoDB in the absence of a backend team, enabling continuous progress. Led daily stand-ups and coordinated a team of 12 to meet sprint deadlines, fostering collaboration and clear communication."
  },
  {
    title: "Frontend Developer",
    period: "Jun 2024 - Jul 2024",
    company: "No-Country",
    description:
      "Led sprint planning and task distribution, collaborating closely with other team leads to ensure smooth integration. Resolved technical challenges and implemented TypeScript to enhance calendar functionality, working within a 15-person team to drive project success."
  }
];

const FourthSlide = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detectar si es desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleMediaChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleMediaChange(); // Ejecutar al cargar
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  // Intersection Observer para detectar visibilidad
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.5,
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
    <div ref={containerRef} className={styles.container}>
      <header>
        <h1>Experience</h1>
      </header>

      {isInView &&
        projects.map((project, index) => {
          const cardContent = (
            <MilestoneCard
              title={project.title}
              period={project.period}
              company={project.company}
              description={project.description}
            />
          );

     
          if (isDesktop) {
            return (
              <motion.div
                key={index}
                className={styles['milestone-card']}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {cardContent}
              </motion.div>
            );
          }

          // Renderizado para dispositivos móviles y tabletas sin animación
          return (
            <div key={index} className={styles['milestone-card']}>
              {cardContent}
            </div>
          );
        })}
    </div>
  );
};

export default FourthSlide;
