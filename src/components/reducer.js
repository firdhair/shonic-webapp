const initialState = {
    email:'',
    password:'',
    username:'',
    loading: false,
    error: ''
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
        default:
            return state
    }
}