import axios from 'axios'
import React from 'react'
import {useNavigate } from "react-router-dom"

const fetchPostStart = {
    type: 'fetch-start'
}

const loginActionAsync = (email, password) => {
  console.log("help this is login")
  return (dispatch, getState) => {
    // baseUrl/users/authenticate
    axios.post(`https://shonic-test.herokuapp.com/api/v1/auth/login`, {
      email,
      password
    },
    {
      headers: {
        // 'access_token': token,
        // 'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
      }
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
    payload
  }
);


const registAccount2 = (email, password) => {
    console.log("ini email: ", email)
    return (dispatch, getState, baseUrl) => {
    axios.post('https://shonic-test.herokuapp.com/api/v1/auth/register', {
      email: email,
      fullname: 'ramadhani',
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log("response:", response);
      // const storage = window.localStorage
      // storage.setItem("token", response.data.data.token)
    }).catch((error) => {
      console.log("error: ",error)
    })
  }
}

const registAccount = (email, fullname, password) => {
 console.log("email:", email, "fullname: ", fullname, "password: ", password)
  
 return (dispatch, getState, baseUrl) => {
    // baseUrl/users/authenticate
    console.log("ini regist account")
    axios.post('https://shonic-test.herokuapp.com/api/v1/auth/register', {
      email,
      fullname,
      password
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log("response data: ", response.data)
      //dispatch(loginActionSuccess({ username, password }));
    }).catch((error) => {
      console.log("error", error)
    });
  }
}

export{
    fetchPostStart,
    loginActionAsync,
    registAccount
}