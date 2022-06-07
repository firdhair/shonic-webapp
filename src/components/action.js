import axios from 'axios'
import React from 'react'

const fetchPostStart = {
    type: 'fetch-start'
}

const loginActionAsync = (email, password, history) => {
  console.log("help this is login", email, password)
  return (dispatch, getState, baseUrl) => {
    // baseUrl/users/authenticate
    axios.post(`${baseUrl}/api/v1/auth/login`, {
      email,
      password
    }).then((response) => {
      console.log("response data: ", response.data)
      const token = response.data.token
      const storage = window.localStorage
      storage.setItem('token', token)
      dispatch(loginActionSuccess({ email, password }));
      history('/home')
    }).catch((error) => {
      console.log("error: ", error)
    });
  }
}

const loginActionSuccess = (payload) => (
  console.log("payload: ", payload),
  {
    type: 'login/success',
    status: 'success',
    payload
  }
);


const registAccountAsync = (email, fullname, password, history) => {
 //console.log("email:", email, "fullname: ", fullname, "password: ", password)
  
 return (dispatch, getState, baseUrl) => {
    axios.post(`${baseUrl}/api/v1/auth/register`, {
      email,
      fullname,
      password
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log("response data: ", response.data)
      console.log("berhasil regist!")
      history('/login')
    }).catch((error) => {
      console.log("error", error)
    });
  }
}

const checkEmailAsync = (email, history) => {
  return(dispatch, getState, baseUrl) => {
    console.log(email, typeof email)
  
    axios.post(`https://shonic-test.herokuapp.com/api/v1/otp/send`, {
      "email": `${email}`,
    }
    ).then((response) => {
      console.log("response data email: ", response.data)
      console.log("status: ", response.status)
        console.log("email sudah terdaftar")
        dispatch(checkEmailSucces(email))
        history('/verifikasi')   
    }).catch((error) => {
      console.log("error email: ", error)
      dispatch(checkEmailFailed)
    });
  }
}

const checkEmailSucces = (payload) => (
  console.log("payload email success: ", payload),
  {
    type: 'check-email/success',
    payload
  }
);

const checkEmailFailed = {
    type: 'check-email/failed',
}

const otpVerifAsync = (email, otp, history) => {
  console.log("ini payload otp verif", email)
  return(dispatch, getState, baseUrl) => {
    axios.post(`${baseUrl}/api/v1/otp/validate`, {
      email: `"${email}"`, 
      otp: otp
    }).then((response)=> {
      console.log("response otp verif", response)
      history('/lengkapi_pendaftaran')
    }).catch((error)=> {
      console.log("error: ", error)
    })
  }
}

export{
    fetchPostStart,
    loginActionAsync,
    registAccountAsync,
    checkEmailAsync,
    otpVerifAsync,
}