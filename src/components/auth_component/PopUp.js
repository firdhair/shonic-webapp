//css
import style from './PopUp.module.scss';
//react router
import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom"
// necessary dependencies
import { useDispatch, useSelector } from 'react-redux';
import { checkEmailAsync } from '../action';
import { useState } from 'react';
import Popup from 'reactjs-popup'

const PopUp = ({open,  onClose, email}) => {
    return(
    <Popup open={open} closeOnDocumentClick onClose={onClose}>
     <div className={style.modal}>
       <div className={style.modal_content}>
           <a className={style.close} onClick={onClose}>
             &times;
           </a>
           <h1>Email sudah terdaftar</h1>
           <p>Lanjut masuk dengan email {email}?</p>
           <div className={style.choices}>
               <button className={style.ubah} onClick={onClose}>Ubah Email</button>
               <button className={style.masuk}>Ya, Masuk</button>
           </div>
       </div>
     </div>
    </Popup>
    )
}

export default PopUp