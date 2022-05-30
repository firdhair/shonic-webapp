//css
import styles from './ResetPassNext.module.scss';
//react router
import { LeftButton } from '../../images/icons/ShonicIcon';

const ResetPassNext = () => {
  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <div className={styles.head}>
            <LeftButton className={styles.left} />
            <h3 className={`${styles.h3} bold-32`}>buat password</h3>
          </div>
          <p className={`${styles.syarat} medium-12`}>Masukkan email yang terdaftar pada akun Shonic untuk mengatur ulang password Anda </p>

          <form className={styles.form}>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>Password Baru</label>
              <input className={`${styles.input} regular-14`} type="password" placeholder="password" name="password" />
            </div>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>Konfirmasi Password Baru</label>
              <input className={`${styles.input} regular-14`} type="password" placeholder="password" name="password" />
            </div>

            <button className={`${styles.button} semibold-16`}>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassNext;
