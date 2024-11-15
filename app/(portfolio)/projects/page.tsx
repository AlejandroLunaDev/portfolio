import ProjectSlide from './components/ProjectSlide/ProjectSlide';
import SliderParagraph from '@/app/shared/components/SliderParagraph/SliderParagraph';

export default function Projects() {
  return (
    <>
      <section>
        <SliderParagraph
          title="Projects"
          text="Design and build simple, intuitive, and scalable web products"
        />
      </section>
      {/* Project 1 */}
      <section>
        <ProjectSlide
          projectNumber="numberone"
          projectName="Easy Turnos"
          technologies={['react', 'typeScript', 'tailwind', 'materialUI']}
          description="Easy Turnos is a site for professionals looking to manage appointments with their clients easily and quickly. This project came about through my participation in a work simulation at No-Country, where I collaborated with a team to develop an efficient and modern solution for appointment management."
          projectImage="proyectoone"
          demoLink="https://easy-turnos.vercel.app/"
          githubLink="https://github.com/NoCountrySimulacion/EasyTurnos/tree/frontend"
          background="linear-gradient(0deg, rgba(59, 4, 62, 1) 0%, rgba(0, 0, 0, 1) 30%)"
        />
      </section>
      <section>
        {/* Project 2 */}
        <ProjectSlide
          projectNumber="numbertwo"
          projectName="SiLoUso"
          technologies={['react', 'typeScript', 'tailwind', 'materialUI','express', 'mongoDB']}
          description="SiLoUso is a Full-Stack ecommerce project developed during my courses at Coderhouse. In this project, I faced the challenge of learning new technologies and applying all I had learned to launch a fully functional online store."
          projectImage="projecttwo"
          demoLink="https://silouso.vercel.app/"
          githubLink="https://github.com/NoCountrySimulacion/SiLoUso/tree/frontend"
          background="linear-gradient(180deg, rgba(59, 4, 62, 1) 0%, rgba(0, 0, 0, 1) 30%)"
        />
      </section>
      <section>
        {/* Project 3 */}
        <ProjectSlide
          projectNumber="numberthree"
          projectName="Windows 11 Clone"
          technologies={['html', 'css', 'javascript', 'sass']}
          description="Windows11-Clone is a project developed entirely in JavaScript, where I tested my initial skills in the language. The goal was to create an interactive and engaging application that replicates the experience of the Windows 11 operating system."
          projectImage="projectthree"
          demoLink="https://windows-11-clone.vercel.app/"
          githubLink="https://github.com/NoCountrySimulacion/Windows-11-Clone/tree/frontend"
          background="linear-gradient(0deg, rgba(59, 4, 62, 1) 0%, rgba(0, 0, 0, 1) 30%)"
        />
      </section>
      <section>
        {/* Project 4 */}
        <ProjectSlide
          projectNumber="numberfour"
          projectName="WorkWise"
          technologies={['nextjs', 'typescript', 'zustand', 'tailwind']}
          description="It is a tool that facilitates human resource management through an innovative, intuitive, and practical design. It allows for employee registration, attendance control, justification, vacation, and leave management, with the objective of payroll processing and attendance control."
          projectImage="workwise"
          demoLink=""
          githubLink="https://github.com/AlejandroLunaDev/workwise"
          background="linear-gradient(180deg, rgba(59, 4, 62, 1) 0%, rgba(0, 0, 0, 1) 30%)"
        />
      </section>
    </>
  );
}
