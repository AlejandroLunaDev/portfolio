import Logo from '../atoms/logo/Logo';
import styles from './navbar.module.scss';
import NavigationMenu from '../molecules/navigationMenu/NavigationMenu';
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <NavigationMenu />
    </nav>
  );
}
