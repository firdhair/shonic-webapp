import styles from './NavAuth.module.scss';
import { ShonicIcon, ShonicText } from '../../images/icons/ShonicIcon';

import { Link } from 'react-router-dom';

const NavAuth = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <div className={styles.icon}>
            <Link to="/">
              <ShonicIcon className={styles.logo} />
              <ShonicText className={styles.text} />
            </Link>
          </div>
          <p className={`${styles.desc} regular-12-res`}>Butuh Bantuan?</p>
        </nav>
      </header>
    </>
  );
};

export default NavAuth;
