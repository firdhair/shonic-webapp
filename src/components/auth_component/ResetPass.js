//css
import styles from './ResetPass.module.scss';
//react router
import { LeftButton } from '../../images/icons/ShonicIcon';
// router
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ResetPass = () => {
  //set state for validation
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  let history = useNavigate();

  const validation = (e) => {
    let isValid = true;
    let emailInput = e.target.parentNode.childNodes[0].childNodes[1];
    // eslint-disable-next-line no-useless-escape
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email === '') {
      setErrorEmail('Email tidak boleh kosong');
      emailInput.style.cssText = 'border:1px solid red';
      isValid = false;
      setValidEmail(false);
    } else if (regex.test(email) === false) {
      setErrorEmail('Format email tidak valid');
      emailInput.style.cssText = 'border:1px solid red';
      isValid = false;
      setValidEmail(false);
    } else {
      setErrorEmail('');
      emailInput.style.cssText = 'border:1px solid #e0e0e0';
      isValid = true;
      setValidEmail(true);
    }
    return isValid;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('lalala');
    /* let emailInput = e.target.parentNode.childNodes[0].childNodes[1]; */
    if (validation(e)) {
      /* missing dispatch  */
      setErrorEmail('');
      console.log('help this is reset pass');
      history('/resetpass_verif');
    }
  };
  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <div className={styles.head}>
            <Link to="/login">
              <LeftButton className={styles.left} />
            </Link>
            <h3 className={`${styles.h3} bold-32`}>Ganti password</h3>
          </div>
          <p className={`${styles.syarat} medium-12`}>Masukkan email yang terdaftar pada akun Shonic untuk mengatur ulang password Anda </p>

          <form className={styles.form}>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>Email</label>
              <input
                className={`${styles.input} regular-14`}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Contoh: user@gmail.com"
                name="email"
              />
              <span className={`${styles.span} regular-12`}>{errorEmail}</span>
            </div>

            <button className={`${styles.button} semibold-16`} onClick={onSubmit}>
              submit
            </button>
          </form>

          {/* DAFTAR */}
          <p className={`${styles.daftar} medium-14`}>
            Kembali ke halaman
            <span>
              <Link to="/login"> Login</Link>
            </span>{' '}
            atau{' '}
            <span>
              <Link to="/register">Daftar</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
