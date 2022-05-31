// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// const initialState = {
//     isUserLogged: false, 
// }

// const loginSlice = createSlice({
//     name: "USER_LOGIN",
//     initialState, 
//     reducers: {
//         submitUserData: (state, action)=> {
//             state.isUserLogged = action.payload
//         }
//     }
// })

// const REACT_APP_BACKEND = ` http://localhost:3000`

// const isMyUserLogged = (user)=> {
//     return async (dispatch)=> {
//         try {
//           const response = await axios.post(`${REACT_APP_BACKEND}/auth/login`, user) 
//           console.log(response)         
//           dispatch(submitUserData(response.data))

//         } catch (error) {
//             console.log(error)
//         }      
//     }
// }



// export  { loginSlice, isMyUserLogged }
// export const { submitUserData } = loginSlice.actions
// export default loginSlice.reducer