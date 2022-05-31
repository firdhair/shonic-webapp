//css
import styles from './ResetPass.module.scss';
//react router
import { LeftButton } from '../../images/icons/ShonicIcon';
// router
import { Link } from 'react-router-dom';

const ResetPass = () => {
  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <div className={styles.head}>
            <Link to="/login">
              <LeftButton className={styles.left} />
            </Link>
            <h3 className={`${styles.h3} bold-32`}>Reset password</h3>
          </div>
          <p className={`${styles.syarat} medium-12`}>Masukkan email yang terdaftar pada akun Shonic untuk mengatur ulang password Anda </p>

          <form className={styles.form}>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>Email</label>
              <input className={`${styles.input} regular-14`} type="email" placeholder="Contoh: user@gmail.com" name="email" />
            </div>

            <button className={`${styles.button} semibold-16`}>submit</button>
          </form>

          {/* DAFTAR */}
          <p className={`${styles.daftar} medium-14`}>
            Kembali ke halaman
            <span>
              <Link to="/login"> Login</Link>
            </span>{' '}
            atau{' '}
            <span>
              <Link to="/register">Daftar</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
