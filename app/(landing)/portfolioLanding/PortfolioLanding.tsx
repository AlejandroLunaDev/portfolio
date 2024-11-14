import Image from 'next/image';
import './PortfolioLanding.scss';
import TapHint from '@/app/shared/components/tapHint/TapHint';
import { TbHandClick } from 'react-icons/tb';
import AnimatedWord from './components/AnimatedWord/AnimatedWord';
import AnimatedWordD from './components/AnimatedWordD/AnimatedWordD';

export default function PortfolioLanding() {
  const initialTexts = {
    text1: 'Hello',
    text2: 'I am',
    text3: 'Ale',
  };

  // Puedes definir hoverText y animationDelay en cada palabra.
  return (
    <section className="home">
      <picture>
        <Image
          priority
          src="/images/LogoAle3D.webp"
          width={500}
          height={500}
          alt="logo"
        />
      </picture>
      <article>
        <div className="gostContainer"></div>
        <div className='wordsContainerD'>
        <AnimatedWordD />
        </div>
        <div className="wordsContainer">
          <AnimatedWord
            text={initialTexts.text1}
            hoverText="About" // Texto al pasar el ratón
            animationDelay={200} // Retraso de la animación
            href="/about" // Puedes poner la URL aquí si lo deseas
          />

          <AnimatedWord
            text={initialTexts.text2}
            hoverText="Projects" // Texto alternativo para hover
            animationDelay={300} // Retraso de animación
            href="/projects" // Puedes definir el enlace aquí
          />

          <AnimatedWord
            text={initialTexts.text3}
            hoverText="Contact"
            animationDelay={400} // Retraso de animación
            href="/contact"
            className="variant"
          />
        </div>
      </article>
      <TapHint Icon={TbHandClick} paragraphText="Tap anywhere" />
    </section>
  );
}
