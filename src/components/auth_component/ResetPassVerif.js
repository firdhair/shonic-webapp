//css
import styles from './ResetPassVerif.module.scss';
//react router
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { LeftButton } from '../../images/icons/ShonicIcon';
import { fetchRefreshState, otpVerifForgotPass, checkEmailForgotPass } from '../action';


const ResetPassVerif = () => {
  const { email, verifPass, emailStatus} = useSelector((state) => state);
  const [otp, setOtp] = useState();

  const dispatch = useDispatch();
  let history = useNavigate()
  console.log("email verif: ", email)
  
  useEffect(()=> {
      // refresh verifAcc & emailStatus state value
      dispatch(fetchRefreshState)
  }, [])

  const onVerification = (e) => {
    e.preventDefault();
    let otp2 = Number(otp)
    console.log("otp", otp2, typeof otp2, "email", email)
    dispatch(otpVerifForgotPass(email, otp2, history))
  }

  const onResendCode = (e) => {
    console.log("resend code")
    dispatch(checkEmailForgotPass(email, history))
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
            <h3 className={`${styles.h3} semibold-25`}>Verifikasi Password</h3>
          </div>
          {verifPass === false ? 
                <>
                  <div className={`${styles.danger} medium-12`}>
                  <p> Kode yang Anda masukkan salah</p>
                  </div>
                </>
              : null }
          <p className={`${styles.syarat} medium-12`}>
            Kode berhasil dikirim melalui email <span>{email}</span>, periksa dan masukkan kode disini untuk dapat melakukan reset password
          </p>

          <form className={styles.form}>
            <input className={`${styles.input} regular-14`} type="text" name="text" value={otp} onChange={(e) => setOtp(e.target.value)}/>
            <button className={`${styles.button} semibold-16`} onClick={onVerification}>Verifikasi</button>
            
          </form>

          {/* DAFTAR */}
          <p className={`${styles.daftar} medium-14`}>
            Tidak menerima kode verifikasi?  <span  onClick={onResendCode}> Kirim Ulang</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassVerif;
