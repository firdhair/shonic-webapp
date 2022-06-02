import axios from 'axios'
import React from 'react'

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
    }).then((response) => {
      console.log("response data: ", response.data)
      //dispatch(loginActionSuccess({ username, password }));
    }).catch((error) => {

    });
  }
}


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
  return (dispatch, getState, baseUrl) => {
    // baseUrl/users/authenticate
    axios.post(`https://shonic-test.herokuapp.com/api/v1/auth/register`, {
      email,
      password
    }).then((response) => {
      console.log("response data: ", response.data)
      //dispatch(loginActionSuccess({ username, password }));
    }).catch((error) => {

    });
  }
}

export{
    fetchPostStart,
    loginActionAsync,
    registAccount
}