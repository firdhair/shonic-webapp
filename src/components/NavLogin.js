import styles from './NavLogin.module.scss';
import { ShonicIcon, ShonicText } from '../images/icons/ShonicIcon';

const NavLogin = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <div className={styles.icon}>
            <ShonicIcon className={styles.logo} />
            <ShonicText className={styles.text} />
          </div>
          <p className={styles.desc}>Butuh Bantuan?</p>
        </nav>
      </header>
    </>
  );
};

export default NavLogin;
