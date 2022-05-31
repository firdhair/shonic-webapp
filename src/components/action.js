import axios from 'axios'
import React from 'react'

const fetchPostStart = {
    type: 'fetch-start'
}

const loginActionAsync = (email, password) => (
  console.log("payload: ", email, password),
  {
  type: 'fetch-start',
  email, password
});

export{
    fetchPostStart,
    loginActionAsync
}