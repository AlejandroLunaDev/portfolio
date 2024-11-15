import Image from 'next/image';
import './PortfolioLanding.scss';
import TapHint from '@/app/shared/components/tapHint/TapHint';
import { TbHandClick } from 'react-icons/tb';

import AnimatedWordD from './components/AnimatedWordD/AnimatedWordD';
import Link from 'next/link';

export default function PortfolioLanding() {


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

        <div className='wordsContainerD'>
        <AnimatedWordD />
        <div className='links-menu'>
          <Link className='word1' href={'/about'}>about</Link>
          <Link className='word2' href={'/projects'}>projects</Link>
          <Link className='word3' href={'/contact'}>contact</Link>
        </div>
        </div>
      </article>
      <TapHint Icon={TbHandClick} paragraphText="Tap anyword" />
    </section>
  );
}
