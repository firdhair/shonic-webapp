//Pic
import { LoginPic } from '../../images/pictures/LoginPic';
import { GoogleIcon } from '../../images/icons/ShonicIcon';
//css
import styles from './Login.module.scss';
//react router
import { Link } from 'react-router-dom';
// necessary dependencies
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostStart, loginActionAsync } from '../action';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ini handleSubmit');
    dispatch(loginActionAsync(email, password));
  };

  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        <div className={styles.flexup}>
          <LoginPic className={styles.pic} />
        </div>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <h3 className={`${styles.h3} bold-32`}>masuk</h3>
          <form className={styles.form}>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>email</label>
              <input className={`${styles.input} regular-14`} type="email" placeholder="masukkan email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>password</label>
              <input className={`${styles.input} regular-14`} type="password" placeholder="masukkan password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className={`${styles.forgotPassword} medium-12`}>
              <Link to="/resetpass">Lupa Password?</Link>
            </p>
            <button className={`${styles.button} semibold-16`} onClick={handleSubmit}>
              Masuk
            </button>
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
            belum punya akun?
            <span> </span>
            <Link to="/register" className={styles.link}>
              daftar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
