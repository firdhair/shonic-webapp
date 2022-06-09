//css
import styles from './LoginNext.module.scss';
//react router
import { Link, useNavigate } from 'react-router-dom';
import { EyeClosed, EyeOpen, LeftButton } from '../../images/icons/ShonicIcon';
// necessary dependencies
import { useDispatch, useSelector } from 'react-redux';
import { checkEmailAsync, registAccountAsync } from '../action';
import { useState } from 'react';

const LoginNext = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const [passwordType, setPasswordType] = useState('password');
  const [passwordTypeConfirm, setPasswordTypeConfirm] = useState('password');
  const { email } = useSelector((state) => state);

  let history = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordType = (e) => {
    e.preventDefault();
    if (passwordType === 'password') {
      setPasswordType('text');
    } else {
      setPasswordType('password');
    }
    console.log('PASSWORD TOGGLE CLICKEDDDDDDDDDDD');
  };
  const togglePasswordTypeConfirm = (e) => {
    e.preventDefault();
    if (passwordTypeConfirm === 'password') {
      setPasswordTypeConfirm('text');
    } else {
      setPasswordTypeConfirm('password');
    }
    console.log('PASSWORD TOGGLE CLICKEDDDDDDDDDDD');
  };

  const createAccount = (e) => {
    e.preventDefault();
    console.log('halo ini create account', fullName, password, konfirmasiPassword);
    if (validation(e)) {
      dispatch(registAccountAsync(email, fullName, password, history));
    }
  };

  const validation = (e) => {
    let isValid = false;
    let konfirmasiInput = e.target.parentNode.childNodes[2].childNodes[1];
    console.log(konfirmasiInput);
    if (password !== konfirmasiPassword) {
      setErrorPass('Password tidak sama');
      konfirmasiInput.style.cssText = 'border:1px solid #CB3A31';
      isValid = false;
      console.log(errorPass);
    } else {
      console.log('password sama');
      setErrorPass('');
      isValid = true;
    }
    return isValid;
  };

  return (
    <div className={styles.outer}>
      <div className={`${styles.flexcontainer} container`}>
        {/* LOGIN FORM */}
        <div className={styles.flexbottom}>
          <div className={styles.head}>
            <Link to="/verifikasi">
              <LeftButton className={styles.left} />
            </Link>
            <h3 className={`${styles.h3} bold-24`}>Lengkapi Pendaftaran</h3>
          </div>
          <p className={`${styles.syarat} medium-12`}>
            Kode berhasil dikirim melalui email <span>shonic@gmail.com</span>, periksa dan masukkan kode disini untuk dapat membuat akun baru
          </p>

          <form className={styles.form}>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>Nama Lengkap</label>
              <input className={`${styles.input} regular-14`} type="email" placeholder="Contoh: Rachel Anastasya" name="name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>password</label>
              <div className={styles.flexinput}>
                <input className={`${styles.input} regular-14`} type={passwordType} placeholder="masukkan password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className={styles.password} onClick={togglePasswordType}>
                  {passwordType === 'password' ? <EyeClosed /> : <EyeOpen />}
                </button>
              </div>
            </div>
            <div className={styles.div}>
              <label className={`${styles.label} medium-14`}>Konfirmasi password</label>
              <div className={styles.flexinput}>
                <input className={`${styles.input} regular-14`} type={passwordTypeConfirm} placeholder="masukkan password" name="password" value={konfirmasiPassword} onChange={(e) => setKonfirmasiPassword(e.target.value)} />
                <button className={styles.password} onClick={togglePasswordTypeConfirm}>
                  {passwordTypeConfirm === 'password' ? <EyeClosed /> : <EyeOpen />}
                </button>
              </div>
              <span className={`${styles.span} regular-12`}>{errorPass}</span>
            </div>
            <button className={`${styles.button} semibold-16`} onClick={createAccount}>
              Daftar
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

export default LoginNext;
