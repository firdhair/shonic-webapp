//css
import styles from './LoginNext.module.scss';
//react router
import { Link } from 'react-router-dom';
import { LeftButton } from '../../images/icons/ShonicIcon';

const LoginNext = () => {
  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <div className={styles.head}>
            <Link to="/verifikasi">
               <LeftButton className={styles.left} />
            </Link>
            <h3 className={`${styles.h3} bold-32`}>Lengkapi Pendaftaran</h3>
          </div>
          <p className={`${styles.syarat} medium-12`}>
            Kode berhasil dikirim melalui email <span>shonic@gmail.com</span>, periksa dan masukkan kode disini untuk dapat membuat akun baru
          </p>

          <form className={styles.form}>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>Nama Lengkap</label>
              <input className={`${styles.input} regular-14`} type="email" placeholder="Contoh: Rachel Anastasya" name="email" />
            </div>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>password</label>
              <input className={`${styles.input} regular-14`} type="password" placeholder="masukkan password" name="password" />
            </div>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>Konfirmasi password</label>
              <input className={`${styles.input} regular-14`} type="password" placeholder="masukkan password" name="password" />
            </div>
            <button className={`${styles.button} semibold-16`}>Daftar</button>
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

export default LoginNext;
