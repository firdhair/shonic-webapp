const initialState = {
    email:'',
    password:'',
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
        default:
            return state
    }
}