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
          technologies={['React', 'TypeScript', 'Tailwind', 'MaterialUI']}
          description="Easy Turnos es un sitio para profesionales que buscan gestionar citas con sus clientes de manera fácil y rápida. Este proyecto surgió de mi participación en la simulación laboral de No-Country, donde trabajé en equipo para desarrollar una solución eficiente y moderna para la gestión de citas."
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
          technologies={['React', 'TypeScript', 'Tailwind', 'MaterialUI']}
          description="SiLoUso es un proyecto Full-Stack de ecommerce desarrollado durante los cursos en Coderhouse. En este proyecto, tuve el desafío de aprender nuevas tecnologías y aplicar todo lo aprendido para poner en funcionamiento una tienda en línea completa."
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
          technologies={['React', 'TypeScript', 'Tailwind', 'MaterialUI']}
          description="Windows11-Clone es un proyecto desarrollado completamente en JavaScript, donde puse a prueba mis habilidades iniciales en el lenguaje. El objetivo fue crear una aplicación interactiva y atractiva, replicando la experiencia del sistema operativo Windows 11."
          projectImage="projectthree"
          demoLink="https://windows-11-clone.vercel.app/"
          githubLink="https://github.com/NoCountrySimulacion/Windows-11-Clone/tree/frontend"
          background="linear-gradient(0deg, rgba(59, 4, 62, 1) 0%, rgba(0, 0, 0, 1) 30%)"
        />
      </section>
    </>
  );
}
