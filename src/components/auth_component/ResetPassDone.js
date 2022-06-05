//css
import { ResetDone } from '../../images/pictures/ResetDone';
import styles from './ResetPassDone.module.scss';
//react router
import { Link } from 'react-router-dom';

const ResetPassDone = () => {
  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <h3 className={`${styles.h3} bold-32`}>buat password</h3>
          <ResetDone />
          <p className={`${styles.syarat} medium-12`}>Silakan masuk ke akunmu dengan password yang baru</p>
          <button className={`${styles.button} semibold-16`}>masuk</button>
          <Link to="/">
              
          <button className={`${styles.back} semibold-16`}>kembali ke beranda</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassDone;
