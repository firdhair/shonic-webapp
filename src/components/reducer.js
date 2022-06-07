import { Redirect, Route } from "react-router";
const initialState = {
    email:'',
    password:'',
    loading: false,
    emailStatus: true
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action

    switch(type){
        case 'fetch-start':
            console.log("ini test redux fetch-start")
            return {
                ...state,
                loading:true
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
                emailStatus: true
            }
        case 'check-email/failed':
            console.log("check-email failed")
            return {
                ...state,
                emailStatus: false
            }
        default:
            return state
    }
}