import axios from 'axios'
import React from 'react'
import {useNavigate } from "react-router-dom"

const fetchPostStart = {
    type: 'fetch-start'
}

const loginActionAsync = (email, password) => {
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
      
    }).catch((error) => {

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


const registAccount = (email, fullname, password) => {
 console.log("email:", email, "fullname: ", fullname, "password: ", password)
  
 return (dispatch, getState, baseUrl) => {
    // baseUrl/users/authenticate
    //console.log("ini regist account")
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
      dispatch(checkEmail(email))
      //dispatch(loginActionSuccess({ username, password }));
    }).catch((error) => {
      console.log("error", error)
    });
  }
}

const checkEmail = (email) => {
  return(dispatch, getState, baseUrl) => {
    console.log(email, typeof email)
  
    axios.post(`https://shonic-test.herokuapp.com/api/v1/otp/send`, {
      email: `"${email}"`,
    }
    ).then((response) => {
      console.log("response data email: ", response.data)
      console.log("status: ", response.status)
      if(response.status === 400){
        console.log("email sudah terdaftar")
      }
    }).catch((error) => {
      console.log("error email: ", error)
    });
  }
}

export{
    fetchPostStart,
    loginActionAsync,
    registAccount,
    checkEmail
}