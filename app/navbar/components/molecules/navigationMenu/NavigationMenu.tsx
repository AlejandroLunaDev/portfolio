'use client'
import styles from './NavigationMenu.module.scss';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Turn as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Importa usePathname
import ContactAction from '../../atoms/contactAction/contactAction';

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Utiliza usePathname en lugar de useLocation

  // Cerrar menú y hacer scroll al inicio al cambiar de ruta
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]); // Observa pathname en lugar de location

  const items: { id: number; name: string; route: string }[] = [
    { id: 1, name: 'My Projects', route: '/project' },
    { id: 2, name: 'About Me', route: '/about' },
    { id: 3, name: 'Contact Me', route: '/contact' },
    { id: 4, name: 'Home', route: '/' }
  ];
  

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.5, staggerChildren: 0.1, staggerDirection: -1, when: 'afterChildren' } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.5, staggerChildren: 0.1, staggerDirection: 1, when: 'beforeChildren' } }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20, transition: { duration: 0.3 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const imageVariants = {
    closed: { opacity: 0, x: 50, transition: { duration: 0.5 } },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }
  };

  return (
    <div className={styles.App}>
      <motion.button
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        initial={false}
      >
        <motion.div
          className={styles.menuButtonBackground}
          initial={false}
          animate={open ? { backgroundColor: '#8A2BE2' } : { backgroundColor: 'transparent' }}
          transition={{ duration: 0.5 }}
        />
        <Hamburger size={34} color='#ffff ' />
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.ul className={styles.menu} variants={menuVariants} initial='closed' animate='open' exit='closed'>
            {items.map((item, index) => (
              <motion.li key={index} variants={itemVariants} className={styles.menuItem}>
                <Link href={item.route} style={{ textDecoration: 'none', color: 'white' }}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
            {/* footer */}
            <motion.div className={styles.menuLine} initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.5 }} />
            <Link href='/' style={{ display: 'flex', justifyContent: 'right', paddingRight: '10px' }}>
              <motion.img src='logoale3D.svg' alt='' style={{ width: 100, height: 100 }} variants={imageVariants} />
            </Link>
            {/* Sección de Conéctate */}
            <ContactAction items={items} />
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
