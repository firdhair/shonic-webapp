//Pic
import { LoginPic } from '../../images/pictures/LoginPic';
import { GoogleIcon } from '../../images/icons/ShonicIcon';
//css
import styles from './Register.module.scss';
//react router
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// necessary dependencies
import { useDispatch, useSelector } from 'react-redux';
import { checkEmailAsync, fetchRefreshState } from '../action';
import { useState, useEffect } from 'react';
import PopUp from '../auth_component/PopUp'

const Register = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const { emailStatus, verifAcc } = useSelector((state) => state);
  const [open, setOpen] = useState(emailStatus);
  const [open2, setOpen2] = useState(true)
  console.log("open: ", open)
  console.log("email status: ", emailStatus, "verifAcc", verifAcc);

<<<<<<< HEAD
  const history = useNavigate()
=======
  let history = useNavigate();
>>>>>>> origin/forgot_password
  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch(fetchRefreshState)
  }, [])

  const onRefreshState = () => {
       dispatch(fetchRefreshState)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("ini handleSubmit register")
    console.log(e.target.parentNode.childNodes[0].childNodes[1])

    if(validation(e)){
        dispatch(checkEmailAsync(email, history))
        setErrorEmail("")
    } 
  }

  const validation = (e) => {
    let isValid = true;
    let emailInput = e.target.parentNode.childNodes[0].childNodes[1];
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email && regex.test(email) === true) {
      setErrorEmail('');
      emailInput.style.cssText = 'border:1px solid #e0e0e0';
      isValid = true;
    } else if (!email || regex.test(email) === false) {
      setErrorEmail('Format email tidak valid, contoh: shonic@gmail.com');
      emailInput.style.cssText = 'border:1px solid red';
      isValid = false;
    }
    return isValid;
  };

<<<<<<< HEAD
=======
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('ini handleSubmit register');
    console.log(e.target.parentNode.childNodes[0].childNodes[1]);
    if (validation(e)) {
      //dispatch(registAccountAsync(email, fullName, password));
      dispatch(checkEmailAsync(email, history));
      console.log('yay lolos', email, fullName, password);
      setErrorEmail('');
      // history('/verifikasi')
    }
    //dispatch(registAccount(email, fullName, password));
  };

>>>>>>> origin/forgot_password
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
              <input className={`${styles.input} regular-14`} type="email" placeholder="masukkan email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <span className={`${styles.span} regular-12`}>{errorEmail}</span>
<<<<<<< HEAD
              {/* {emailStatus === false ? 
                <>
                  <span className={`${styles.span} regular-12`}>Email yang anda masukkan sudah terdaftar</span>
                  <br/>
                </>
              : null } */}
             </div>
=======
            </div>
>>>>>>> origin/forgot_password
            <p className={`${styles.syarat} medium-12`}>
              Dengan mendaftar, saya menyetujui
              <span> Syarat dan Ketentuan</span> serta
              <span> Kebijakan Privasi</span>
            </p>
<<<<<<< HEAD
            <button className={`${styles.button} semibold-16`} onClick={onSubmit}>Daftar</button> 
          </form>  
            
            {emailStatus !== true ? 
           <>
           {/* <p>email is wrong</p> */}
             <PopUp open={open2} email={email} onClose={onRefreshState}/>
           </> : null
          }
          
=======
            <button className={`${styles.button} semibold-16`} onClick={onSubmit}>
              Daftar
            </button>
          </form>
          {/* Aatau */}
>>>>>>> origin/forgot_password
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
