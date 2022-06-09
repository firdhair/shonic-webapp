// import { Redirect, Route } from 'react-router';
const initialState = {
  email: '',
  password: '',
  loading: false,
  error: '',
  status: true,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'fetch-start':
      console.log('ini test redux fetch-start');
      return {
        ...state,
        loading: true,
      };
    case 'LOG_SUCCESS':
      console.log('ini test redux LOG_SUCCESS');
      return {
        ...state,
        status: true,
      };
    case 'LOG_FAILED':
      console.log('ini test redux LOG_FAILED');
      return {
        ...state,
        status: false,
      };
    case 'login/success':
      console.log('login success');
      return {
        ...state,
        ...payload,
      };
    case 'check-email/success':
      console.log('check-email success');
      return {
        ...state,
        email: payload,
      };
    default:
      return state;
  }
}
