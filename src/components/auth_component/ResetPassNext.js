//css
import styles from './ResetPassNext.module.scss';
//react router
import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom"
import { LeftButton } from '../../images/icons/ShonicIcon';

const ResetPassNext = () => {
  let history = useNavigate()

  const resetPass = (e) => {
    e.preventDefault();
    history('/resetpass_done')
  }
  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <div className={styles.head}>
            <Link to="/resetpass_verif">
              <LeftButton className={styles.left} />
            </Link>
            <h3 className={`${styles.h3} bold-32`}>Atur Ulang Password </h3>
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

            <button className={`${styles.button} semibold-16`} onClick={resetPass}>Reset Password</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassNext;
