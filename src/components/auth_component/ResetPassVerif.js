//css
import styles from './ResetPassVerif.module.scss';
//react router
import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom"
import { LeftButton } from '../../images/icons/ShonicIcon';

const ResetPassVerif = () => {
  let history = useNavigate()
  
  const onVerification = (e) => {
    e.preventDefault();
    history('/resetpass_next')
  }

  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <div className={styles.head}>
            <Link to="/resetpass">
              <LeftButton className={styles.left} />
            </Link>
            <h3 className={`${styles.h3} bold-32`}>Verifikasi Password</h3>
          </div>
          <p className={`${styles.syarat} medium-12`}>
            Kode berhasil dikirim melalui email <span>shonic@gmail.com</span>, periksa dan masukkan kode disini untuk dapat melakukan reset password
          </p>

          <form className={styles.form}>
            <input className={`${styles.input} regular-14`} type="text" name="text" />
            <button className={`${styles.button} semibold-16`} onClick={onVerification}>Verifikasi</button>
            
          </form>

          {/* DAFTAR */}
          <p className={`${styles.daftar} medium-14`}>
            Tidak menerima kode verifikasi?
            <span> </span>
            <Link to="/" className={styles.link}>
              Kirim Ulang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassVerif;
