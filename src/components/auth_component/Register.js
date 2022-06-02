//Pic
import { LoginPic } from '../../images/pictures/LoginPic';
import { GoogleIcon } from '../../images/icons/ShonicIcon';
//css
import styles from './Register.module.scss';
//react router
import { Link } from 'react-router-dom';
// necessary dependencies
import { useDispatch, useSelector } from 'react-redux';
import { registAccount, loginActionAsync } from '../action';
import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ini handleSubmit register")
    dispatch(registAccount(email, password));
    setEmail('')
    setPassword('')
  }

  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        <div className={styles.flexup}>
          <LoginPic className={styles.pic} />
        </div>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <h3 className={`${styles.h3} bold-32`}>daftar</h3>
          <form className={styles.form}>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>email</label>
              <input className={`${styles.input} regular-14`} type="email" placeholder="masukkan email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
              <label className={`${styles.label} medium-14`}>password</label>
              <input className={`${styles.input} regular-14`} type="password" placeholder="masukkan email" name="email"  value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className={`${styles.syarat} medium-12`}>
              Dengan mendaftar, saya menyetujui
              <span> Syarat dan Ketentuan</span> serta
              <span> Kebijakan Privasi</span>
            </p>
            <button className={`${styles.button} semibold-16`} onClick={handleSubmit}>Daftar</button>
          </form>
          {/* Aatau */}
          <div className={`${styles.accent} semibold-16`}>
            <div className={styles.strip}></div>
            <p className={`${styles.p} regular-14`}>atau</p>
            <div className={styles.strip}></div>
          </div>
          {/* GOOGLE LOGIN */}
          <button className={styles.buttongoogle}>
            <Link to="/" className={`${styles.link} semibold-16`}>
              <div className={styles.flex}>
                <GoogleIcon />
                <p>Masuk dengan Google</p>
              </div>
            </Link>
          </button>
          {/* DAFTAR */}
          <p className={`${styles.daftar} medium-14`}>
            Sudah punya akun?
            <span> </span>
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
