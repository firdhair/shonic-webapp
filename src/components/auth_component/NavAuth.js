import styles from './NavAuth.module.scss';
import { ShonicIcon, ShonicText } from '../../images/icons/ShonicIcon';

const NavAuth = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <div className={styles.icon}>
            <ShonicIcon className={styles.logo} />
            <ShonicText className={styles.text} />
          </div>
          <p className={`${styles.desc} regular-12-res`}>Butuh Bantuan?</p>
        </nav>
      </header>
    </>
  );
};

export default NavAuth;
