//css
import styles from './Verif.module.scss';
import { DangerButton, LeftButton } from '../../images/icons/ShonicIcon';
//react router
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { otpVerifAsync } from '../action';

const Verif = () => {
  const { email, status } = useSelector((state) => state);
  const [otp, setOtp] = useState();

  const dispatch = useDispatch();
  let history = useNavigate();

  console.log('email verif: ', email);
  const onVerification = (e) => {
    e.preventDefault();
    console.log('otp', otp, 'email', email);
    dispatch(otpVerifAsync(email, otp, history));
    //history('/lengkapi_pendaftaran')
  };

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
          {/* VERIF EROR CONDITIONAL */}
          {status === true ? null : (
            <div className={styles.danger}>
              <DangerButton />
              Kode yang Anda masukkan salah
            </div>
          )}

          <form className={styles.form}>
            <input className={`${styles.input} regular-14`} type="text" name="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <button className={`${styles.button} semibold-16`} onClick={onVerification}>
              Verifikasi
            </button>
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
