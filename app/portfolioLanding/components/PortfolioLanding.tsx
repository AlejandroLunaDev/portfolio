import Image from 'next/image';
import './scss/PortfolioLanding.scss';
import AnimatedWord from '../../components/AnimatedWord/AnimatedWord';
import TapHint from '../../components/tapHint/TapHint';

export default function PortfolioLanding() {
  const initialTexts = {
    text1: 'Hello',
    text2: 'I am',
    text3: 'Ale'
  };

  // Puedes definir hoverText y animationDelay en cada palabra.
  return (
    <section className='home'>
      <picture>
        <Image src='/logoale2.svg' width={500} height={500} alt='logo' />
      </picture>
      <article>
        <div className='gostContainer'></div>
        <div className='wordsContainer'>
            <AnimatedWord
              text={initialTexts.text1}
              hoverText='About' // Texto al pasar el ratón
              animationDelay={300} // Retraso de la animación
              href='/about' // Puedes poner la URL aquí si lo deseas
            />

       
            <AnimatedWord
              text={initialTexts.text2}
              hoverText='Projects' // Texto alternativo para hover
              animationDelay={500} // Retraso de animación
              href='/projects' // Puedes definir el enlace aquí
            />
    
     
            <AnimatedWord
              text={initialTexts.text3}
              hoverText='Contact'
              animationDelay={600} // Retraso de animación
              href='/contact'
              className='variant'
            />
   
        </div>
      </article>
      <TapHint />
    </section>
  );
}
