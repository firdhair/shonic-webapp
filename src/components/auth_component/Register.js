//Pic
import { LoginPic } from '../../images/pictures/LoginPic';
import { GoogleIcon } from '../../images/icons/ShonicIcon';
//css
import styles from './Register.module.scss';
import style from './PopUp.module.scss';
//react router
import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom"
// necessary dependencies
import { useDispatch, useSelector } from 'react-redux';
import { checkEmailAsync } from '../action';
import { useState } from 'react';
import Popup from 'reactjs-popup'
import PopUp from '../auth_component/PopUp'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false)
  const { emailStatus } = useSelector((state) => state);
  console.log("email status: ", emailStatus, "open: ", open)

  let history = useNavigate()
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("ini handleSubmit register")
    console.log(e.target.parentNode.childNodes[0].childNodes[1])
    if(validation(e)){
        dispatch(checkEmailAsync(email, history))
        console.log("yay lolos", email, fullName, password)
        setErrorEmail("")
    } 
  }

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

  const toLogin = (e) => {
    history('/login')
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

              {/* <label className={`${styles.label} medium-14`}>fullname</label>
              <input className={`${styles.input} regular-14`} type="text" placeholder="masukkan fullname" name="fullname"  value={fullName} onChange={(e) => setFullName(e.target.value)} />

              <label className={`${styles.label} medium-14`}>password</label>
              <input className={`${styles.input} regular-14`} type="password" placeholder="masukkan email" name="email"  value={password} onChange={(e) => setPassword(e.target.value)} /> */}
              {emailStatus === false ? 
                <>
                  <span className={`${styles.span} regular-12`}>Email yang anda masukkan sudah terdaftar</span>
                  <br/>
                </>
              : null }
             </div>
            <p className={`${styles.syarat} medium-12`}>
              Dengan mendaftar, saya menyetujui
              <span> Syarat dan Ketentuan</span> serta
              <span> Kebijakan Privasi</span>
            </p>
            <button className={`${styles.button} semibold-16`} onClick={onSubmit}>Daftar</button>
             
          </form>  
          {/* <button type="button" className={style.button} onClick={() =>setOpen(o => !o)}>Popup</button>
          <PopUp open={open} email={email} onClose={closeModal}/>

          
           {emailStatus === false && open === false? 
           <>
           <p>email salah</p>
           <p>{open}</p>
             <PopUp open={open} email={email} onClose={closeModal}/>
           </> */}
           
          {/* //     <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          //     <div className={style.modal}>
          //       <div className={style.modal_content}>
          //           <a className={style.close} onClick={closeModal}>
          //             &times;
          //           </a>
          //           <h1>Email sudah terdaftar</h1>
          //           <p>Lanjut masuk dengan email {email}?</p>
          //           <div className={style.choices}>
          //               <button className={style.ubah} onClick={closeModal}>Ubah Email</button>
          //               <button className={style.masuk}>Ya, Masuk</button>
          //           </div>
          //       </div>
          //     </div>
          // </Popup>
              : null}  */}
           
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
