const initialState = {
    isUserLogged: false, 
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'USER_LOGIN':
        return {
            ...state, 
            isUserLogged: action.payload
        }

        default:
            return state
    }
}