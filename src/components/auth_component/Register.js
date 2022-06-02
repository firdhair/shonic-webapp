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
  const [fullName, setFullName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const dispatch = useDispatch();

   const validation = (e) => {
    let isValid = true;
    let emailInput = e.target.parentNode.childNodes[0].childNodes[1];
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   
        if(email && regex.test(email) === true){
            setErrorEmail("")
            emailInput.style.cssText = 'border:1px solid #e0e0e0';
            isValid = true;
          } else if(!email ||  regex.test(email) === false){
            setErrorEmail("Format email tidak valid, contoh: shonic@gmail.com")
            emailInput.style.cssText = 'border:1px solid red';
            isValid = false;
        }
      return isValid;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("ini handleSubmit register")
    console.log(e.target.parentNode.childNodes[0].childNodes[1])
    if(validation(e)){
        dispatch(registAccount(email, password));
        console.log("yay lolos")
        setErrorEmail("")
    } 
    // dispatch(registAccount(email, password));
    // setEmail('')
    // setPassword('')
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
              <span className={`${styles.span} regular-12`}>{errorEmail}</span>

              <label className={`${styles.label} medium-14`}>fullname</label>
              <input className={`${styles.input} regular-14`} type="text" placeholder="masukkan fullname" name="fullname"  value={fullName} onChange={(e) => setFullName(e.target.value)} />

              <label className={`${styles.label} medium-14`}>password</label>
              <input className={`${styles.input} regular-14`} type="password" placeholder="masukkan email" name="email"  value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p className={`${styles.syarat} medium-12`}>
              Dengan mendaftar, saya menyetujui
              <span> Syarat dan Ketentuan</span> serta
              <span> Kebijakan Privasi</span>
            </p>
            <button className={`${styles.button} semibold-16`} onClick={onSubmit}>Daftar</button>
            <Link to="/verifikasi">
              <button className={`${styles.button} semibold-16`} >Daftar</button>
            </Link>
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
