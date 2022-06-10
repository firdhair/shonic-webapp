import axios from 'axios';

const fetchRefreshState = {
  type: 'fetch-refresh',
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


//////////////////// LOGIN ACTION ////////////////////
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
    dispatch(fetchRefreshState);
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

const checkEmailFailed = {
    type: 'check-email/failed',
}


//////////////////// OTP VERIF CREATE ACCOUNT ACTION ////////////////////
const otpVerifAsync = (email, otp, history) => {
  console.log('ini payload otp verif', email);
  return (dispatch, getState, baseUrl) => {
    axios
      .post(`${baseUrl}/api/v1/otp/validate`, {
         email, otp
      })
      .then((response) => {
        console.log('response otp verif', response);
        history('/lengkapi_pendaftaran');
        console.log('=========BERHASIL VERIF ===========');
        dispatch(otpVerifSuccess)
        dispatch(logSucess());
      })
      .catch((error) => {
        console.log('error: ', error);
        console.log('=========GAGAL VERIF SALAH KODE  ===========');
        dispatch(otpVerifFail)
        dispatch(LogFailed());
      });
  };
};

const otpVerifSuccess = {
  type: 'otp-verif/success'
}

const otpVerifFail = {
  type: 'otp-verif/fail'
}


//////////////////// FORGOT PASS ACTION ////////////////////
const checkEmailForgotPass = (email, history) => {
  return(dispatch, getState, baseUrl) => {
    console.log(email, typeof email)
  
    axios.post(`${baseUrl}/api/v1/forgotpassword/send`, {
      email,
    }
    ).then((response) => {
      console.log("response data email: ", response.data)
      console.log("status: ", response.status)
      console.log("email sudah terdaftar")
      dispatch(checkEmailSucces(email))
     // dispatch(otpVerifForgotPass(email))
      history('/resetpass_verif')   
    }).catch((error) => {
      console.log("error: ", error)
      console.log("email belum terdaftar")
      dispatch(checkEmailFailed)
    });
  }
}

const otpVerifForgotPass = (email, otp, history) => {
  console.log("otpVerifForgotPass", email)
  return(dispatch, getState, baseUrl) => {
    axios.post(`${baseUrl}/api/v1/forgotpassword/validate`, {
     "email": `${email}`,
     "otp": otp
    }).then((response)=> {
      console.log("verif forgot pass berhasil", response.data, response.data.token)
      dispatch(otpVerifPassSuccess(response.data.token))
      history('/resetpass_next')
    }).catch((error)=> {
      console.log("error: ", error)
      dispatch(otpVerifPassFail)
    })
  }
}

 const createNewPass = (email, newPass, tokenPass, history) => {
   console.log("createNewPass", email, newPass, tokenPass)
   console.log(typeof email, typeof newPass, typeof tokenPass)
   return(dispatch, getState, baseUrl) => {
     axios.post(`${baseUrl}/api/v1/forgotpassword/reset_password`, {
      "email": `${email}`,
      "newPassword": newPass,
      "token": tokenPass
    }).then((response)=> {
      console.log("createNewPass berhasil", response.data)
      dispatch(createNewPassSuccess(newPass))
      history('/resetpass_done')
    }).catch((error)=> {
      console.log("error: ", error)
      //dispatch(otpVerifPassFail)
    })
   }
 }


const otpVerifPassSuccess = (payload) => (
  console.log("payload email success: ", payload),
  {
    type: 'otp-verif-forgotPass/success',
    payload
  }
);

const otpVerifPassFail = {
  type: 'otp-verif-forgotPass/fail'
}

const createNewPassSuccess = (payload) => (
  console.log("payload email success: ", payload),
  {
    type: 'create-new-pass/success',
    payload
  }
);

export{
    fetchRefreshState,
    loginActionAsync,
    registAccountAsync,
    checkEmailAsync,
    otpVerifAsync,
    checkEmailForgotPass,
    otpVerifForgotPass,
    createNewPass
}
