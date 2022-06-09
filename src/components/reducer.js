const initialState = {
    email:'',
    password:'',
    loading: false,
    emailStatus: true,
    verifAcc: true
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action

    switch(type){
        case 'fetch-refresh':
            console.log("ini test redux fetch-start")
            return {
                ...state,
                emailStatus: true,
                verifAcc: true
                // loading:true
            }
        case 'login/success':
            console.log("login success")
            return {
                ...state,
                ...payload
        }
        case 'check-email/success':
            console.log("check-email success")
            return {
                ...state, 
                email: payload,
                emailStatus: true,
                // verifAcc: true
            }
        case 'check-email/failed':
            console.log("check-email failed")
            return {
                ...state,
                emailStatus: false,
                // verifAcc: false
            }
        case 'otp-verif/success':
            console.log("verifikasi akun sukses")
            return {
                ...state,
                verifAcc: true
            }
        case 'otp-verif/fail':
            console.log("verifikasi akun gagal")
            return {
                ...state,
                verifAcc: false
            }
        
        default:
            return state
    }
}