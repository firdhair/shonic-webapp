//css
import styles from './ResetPassNext.module.scss';
//react router
import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeftButton } from '../../images/icons/ShonicIcon';
import { createNewPass } from '../action'

const ResetPassNext = () => {
  const [newPass, setNewPass] = useState('')
  const [newPassCheck, setNewPassCheck] = useState('')
  const [errorPass, setErrorPass] = useState('');
  const { tokenPass, email } = useSelector((state) => state);

  let history = useNavigate()
  const dispatch = useDispatch()

  //console.log("tokenPass", tokenPass)

  const resetPass = (e) => {
    e.preventDefault();
    if(validation(e)) {
      dispatch(createNewPass(email, newPass, tokenPass, history))
    }
  }

  const validation = (e) => {
    let isValid = false;
    let konfirmasiInput = e.target.parentNode.childNodes[1].childNodes[1]
    console.log("konfirmasi Input", konfirmasiInput)
    if(newPass !== newPassCheck){
      setErrorPass('Password tidak sama');
      konfirmasiInput.style.cssText = 'border:1px solid #CB3A31';
      isValid = false;
      console.log(errorPass)
    } else {
      console.log("password sama")
      setErrorPass('');
      isValid = true;
    }
    return isValid;
  }

  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <div className={styles.head}>
            <Link to="/resetpass_verif">
              <LeftButton className={styles.left} />
            </Link>
            <h3 className={`${styles.h3} semibold-25`}>Atur Ulang Password </h3>
          </div>

          <form className={styles.form}>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>Password Baru</label>
              <input className={`${styles.input} regular-14`} type="password" placeholder="password" name="password" value={newPass} onChange={(e)=> setNewPass(e.target.value)}/>
            </div>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>Konfirmasi Password Baru</label>
              <input className={`${styles.input} regular-14`} type="password" placeholder="password" name="password" value={newPassCheck} onChange={(e)=> setNewPassCheck(e.target.value)}/>
              <span className={`${styles.span} regular-12`}>{errorPass}</span>
            </div>

            <button className={`${styles.button} semibold-16`} onClick={resetPass}>Reset Password</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassNext;
