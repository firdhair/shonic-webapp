//css
import styles from './Verif.module.scss';
//react router
import { Link } from 'react-router-dom';
import { LeftButton } from '../../images/icons/ShonicIcon';

const Verif = () => {
  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <div className={styles.head}>
            <Link to="/register">
               <LeftButton className={styles.left} />
            </Link>
            <h3 className={`${styles.h3} bold-32`}>Verifikasi akun</h3>
          </div>
          <p className={`${styles.syarat} medium-12`}>
            Kode berhasil dikirim melalui email <span>shonic@gmail.com</span>, periksa dan masukkan kode disini untuk dapat membuat akun baru
          </p>

          <form className={styles.form}>
            <div className={styles.div}>
              <input className={`${styles.input} regular-14`} type="text" name="text" />
              <input className={`${styles.input} regular-14`} type="text" name="text" />
              <input className={`${styles.input} regular-14`} type="text" name="text" />
              <input className={`${styles.input} regular-14`} type="text" name="text" />
              <input className={`${styles.input} regular-14`} type="text" name="text" />
              <input className={`${styles.input} regular-14`} type="text" name="text" />
            </div>
            <button className={`${styles.button} semibold-16`}>Verifikasi</button>
            <Link to="/lengkapipendaftaran">
              <button className={`${styles.button} semibold-16`} >Verifikasi</button>
            </Link>
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

export default Verif;
