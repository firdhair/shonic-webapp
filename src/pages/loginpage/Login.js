//Component
import FotLogin from '../../components/FotLogin';
import NavLogin from '../../components/NavLogin';
//Pic
import { LoginPic } from '../../images/pictures/LoginPic';
import { GoogleIcon } from '../../images/icons/ShonicIcon';
//css
import styles from './Login.module.scss';
//react router
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <NavLogin />
      <section>
        <div className="container">
          {/* LOGIN FORM */}
          <LoginPic className={styles.pic} />
          <h3 className={styles.h3}>masuk</h3>
          <form className={styles.form}>
            <div className={styles.div}>
              <label className={styles.label}>email</label>
              <input className={styles.input} type="email" placeholder="masukkan email" name="email" />
            </div>
            <div className={styles.div}>
              <label className={styles.label}>password</label>
              <input className={styles.input} type="password" placeholder="masukkan password" name="password" />
            </div>
            <button className={styles.button}>Masuk</button>
          </form>
          {/* Aatau */}
          <div className={styles.accent}>
            <div className={styles.strip}></div>
            <p className={styles.p}>atau</p>
            <div className={styles.strip}></div>
          </div>
          {/* GOOGLE LOGIN */}
          <button className={styles.buttongoogle}>
            <Link to="/" className={styles.link}>
              <div className={styles.flex}>
                <GoogleIcon />
                <p>Masuk dengan Google</p>
              </div>
            </Link>
          </button>
          {/* DAFTAR */}
          <p className={styles.daftar}>
            belum punya akun?{' '}
            <Link to="/" className={styles.link}>
              daftar
            </Link>
          </p>
        </div>
      </section>
      <FotLogin />
    </>
  );
};

export default Login;
