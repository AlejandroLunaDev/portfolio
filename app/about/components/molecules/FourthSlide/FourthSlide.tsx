// components/molecules/FourthSlide/FourthSlide.tsx

import React from 'react';
import MilestoneCard from './components/MilestoneCard/MilestoneCard';
import styles from './FourthSlide.module.scss';

const FourthSlide = () => {
  return (
    <div className={styles.container} >
      <header>
        <h1>Experience</h1>
      </header>
      <MilestoneCard
        title="Frontend Developer"
        period="Sep 2024 - Oct 2024"
        company="No-Country"
        description="I developed an application using Next.js, Tailwind, and Zustand, integrating a vacation management and attendance control system via APIs. Additionally, I designed the user interface, created employee and vacation request forms, and developed an interactive circular menu with Shadcn. I also took on the role of UX/UI Designer, ensuring the design was aligned with the project's needs."
      />
      <MilestoneCard
        title="Frontend Developer"
        period="Aug 2024 - Sep 2024"
        company="No-Country"
        description="Developed layouts and core functionalities for mentor, review, and landing pages using React and Tailwind. Created a temporary backend with Node.js and MongoDB in the absence of a backend team, enabling continuous progress. Led daily stand-ups and coordinated a team of 12 to meet sprint deadlines, fostering collaboration and clear communication."
      />
      <MilestoneCard
        title="Frontend Developer"
        period="Jun 2024 - Jul 2024"
        company="No-Country"
        description="Led sprint planning and task distribution, collaborating closely with other team leads to ensure smooth integration. Resolved technical challenges and implemented TypeScript to enhance calendar functionality, working within a 15-person team to drive project success."
      />

    </div>
  );
};

export default FourthSlide;
