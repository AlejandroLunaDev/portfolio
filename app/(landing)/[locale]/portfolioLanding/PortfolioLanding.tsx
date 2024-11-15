import Image from 'next/image';
import './PortfolioLanding.scss';
import TapHint from '@/app/shared/components/tapHint/TapHint';
import { TbHandClick } from 'react-icons/tb';
import AnimatedWordD from './components/AnimatedWordD/AnimatedWordD';
import Link from 'next/link';
import { useTranslations } from 'next-intl'; // Importar el hook

export default function PortfolioLanding() {
  const t = useTranslations(); // Obtener las traducciones
console.log(t('links.about'));
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
        <div className="wordsContainerD">
          <AnimatedWordD />
          <div className="links-menu">
            <Link className="word1" href="/about">{t('links.about')}</Link> {/* Usar traducción */}
            <Link className="word2" href="/projects">{t('links.projects')}</Link> {/* Usar traducción */}
            <Link className="word3" href="/contact">{t('links.contact')}</Link> {/* Usar traducción */}
          </div>
        </div>
      </article>
      <TapHint Icon={TbHandClick} paragraphText={t('tapHint.text')} /> {/* Usar traducción */}
    </section>
  );
}
