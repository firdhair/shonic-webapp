import axios from 'axios';

const fetchPostStart = {
  type: 'fetch-start',
};
const logSucess = () => {
  return {
    type: 'LOG_SUCCESS',
  };
};
const LogFailed = () => {
  return {
    type: 'LOG_FAILED',
  };
};

const loginActionAsync = (email, password, history) => {
  console.log('help this is login', email, password);
  return (dispatch, getState, baseUrl) => {
    // baseUrl/users/authenticate
    axios
      .post(`${baseUrl}/api/v1/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log('response data: ', response.data);
        const token = response.data.token;
        const storage = window.localStorage;
        storage.setItem('token', token);
        dispatch(loginActionSuccess({ email, password }));
        history('/home');
        console.log(response.status);
        console.log('========sucess==============');
        dispatch(logSucess());
      })
      .catch((error) => {
        console.log('=========error========== ', error);
        dispatch(LogFailed());
      });
  };
};

const loginActionSuccess = (payload) => (
  console.log('payload: ', payload),
  {
    type: 'login/success',
    status: 'success',
    payload,
  }
);

const registAccountAsync = (email, fullname, password, history) => {
  console.log('email:', email, 'fullname: ', fullname, 'password: ', password);

  return (dispatch, getState, baseUrl) => {
    // baseUrl/users/authenticate
    //console.log("ini regist account")
    axios
      .post(
        `${baseUrl}/api/v1/auth/register`,
        {
          email,
          fullname,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log('response data: ', response.data);
        console.log('berhasil regist!');
        history('/login');
        //dispatch(checkEmail(email))
        //dispatch(loginActionSuccess({ username, password }));
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};

//create registAccountAsync with loading, error, and success reducer
const registAccountAsyncWithLoading = (email, fullname, password, history) => {
  //adding loading error sucess dispatch
  return (dispatch, getState, baseUrl) => {
    dispatch(fetchPostStart);
    axios
      .post(
        `${baseUrl}/api/v1/auth/register`,
        {
          email,
          fullname,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log('response data: ', response.data);
        console.log('berhasil regist!');
        history('/login');
        //dispatch(checkEmail(email))
        //dispatch(loginActionSuccess({ username, password }));
        dispatch(loginActionSuccess({ email, password }));
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
};

const checkEmailAsync = (email, history) => {
  //let history = useNavigate()
  return (dispatch, getState, baseUrl) => {
    console.log(email, typeof email, history);

    axios
      .post(`https://shonic-test.herokuapp.com/api/v1/otp/send`, {
        email: `"${email}"`,
      })
      .then((response) => {
        console.log('response data email: ', response.data);
        console.log('status: ', response.status);
        if (response.status === 200) {
          //console.log("email sudah terdaftar")
          dispatch(checkEmailSucces(email));
          history('/verifikasi');
        } else {
          console.log('terdapat kesalahan');
        }
      })
      .catch((error) => {
        console.log('error email: ', error);
      });
  };
};

const checkEmailSucces = (payload) => (
  console.log('payload email success: ', payload),
  {
    type: 'check-email/success',
    payload,
  }
);

const otpVerifAsync = (email, otp, history) => {
  console.log('ini payload otp verif', email);
  return (dispatch, getState, baseUrl) => {
    axios
      .post(`${baseUrl}/api/v1/otp/validate`, {
        email: `"${email}"`,
        otp: otp,
      })
      .then((response) => {
        console.log('response otp verif', response);
        history('/lengkapi_pendaftaran');
        console.log('=========BERHASIL VERIF ===========');
        dispatch(logSucess());
      })
      .catch((error) => {
        console.log('error: ', error);
        console.log('=========GAGAL VERIF SALAH KODE  ===========');
        dispatch(LogFailed());
      });
  };
};

// (payload) => {
//   console.log("payload email success", payload),
//   {
//     type: 'check-email/success',
//     payload
//   }
// }

export { fetchPostStart, loginActionAsync, registAccountAsync, checkEmailAsync, otpVerifAsync };
