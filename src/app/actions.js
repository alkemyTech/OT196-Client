import axios from "axios"

const REACT_APP_BACKEND = `http://localhost3001`

export function submitUserData(user){
    return async function(dispatch){
        try {
            //const result = await axios.post(`${REACT_APP_BACKEND}/auth/login`, user)\
            const result = {
                data: true
            }
            return dispatch({
                type: 'USER_LOGIN',
                payload: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}