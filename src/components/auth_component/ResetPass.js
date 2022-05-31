//css
import styles from './ResetPass.module.scss';
//react router
import { LeftButton } from '../../images/icons/ShonicIcon';
<<<<<<< HEAD
=======
// router
import { Link } from 'react-router-dom';
>>>>>>> d3c54db2459db64d4a8e9699dca0e032be3741cf

const ResetPass = () => {
  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <div className={styles.head}>
<<<<<<< HEAD
            <LeftButton className={styles.left} />
=======
            <Link to="/login"><LeftButton className={styles.left} /></Link>
>>>>>>> d3c54db2459db64d4a8e9699dca0e032be3741cf
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
<<<<<<< HEAD
          <p className={`${styles.daftar} medium-14`}>Kembali ke halaman Login atau DaftarTidak menerima kode verifikasi?</p>
=======
          <p className={`${styles.daftar} medium-14`}>Kembali ke halaman  
          <span><Link to="/login"> Login</Link></span> atau <span><Link to="/register">Daftar</Link></span></p>
>>>>>>> d3c54db2459db64d4a8e9699dca0e032be3741cf
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
