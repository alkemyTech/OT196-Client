import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { putRequest } from "../services/RequestService";
const initialState = JSON.parse(localStorage.getItem("userData")) || {
  isUserLogged: false,
};

const loginSlice = createSlice({
  name: "USER_LOGIN",
  initialState,
  reducers: {
    submitUserData: (state, action) => {
      state.isUserLogged = action.payload.isUserLogged || state.isUserLogged;
      state.email = action.payload.email || state.email;
      state.id = action.payload.id || state.id;
      state.roleId = action.payload.roleId || state.roleId;
      state.image = action.payload.image || state.image;
    },
    removeUserData: (state, action) => {
      state = {};
      state.isUserLogged = false;
    },
  },
});

const {
  REACT_APP_BACKEND_LOGIN,
  REACT_APP_BACKEND_REGISTER,
  REACT_APP_BACKEND_USERS,
  REACT_APP_BACKEND_TESTIMONIALS,
  REACT_APP_BACKEND_AUTHME,
} = process.env;

const isMyUserLogged = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const reqPath = REACT_APP_BACKEND_LOGIN;
      const response = await axios.post(reqPath, user);
      const newUserData = { ...response.data.user, ...{ isUserLogged: true } };
      thunkAPI.dispatch(submitUserData(newUserData));
      return newUserData;
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
);

const updateUserLogged = createAsyncThunk(
  "auth/me",
  async (data, thunkAPI) => {
    try {
      const response = await putRequest(REACT_APP_BACKEND_AUTHME, data);
      const newUserData = { email: response.result.email, image: response.result.image };
      const localStorageData = JSON.parse(localStorage.getItem('userData'))
      localStorageData.email = response.result.email 
      localStorageData.image = response.result.image 
      localStorage.setItem('userData', JSON.stringify(localStorageData))
      console.log(newUserData)
      thunkAPI.dispatch(submitUserData(newUserData));
      return true
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }
);

//with this function you can sign off the user sesion
const signOff = () => {
  return function (dispatch) {
    try {
      dispatch(removeUserData());
    } catch (error) {
      console.log(error);
    }
  };
};

const submitUpdateDataOrganization = (dataOrganization) => {
  return async (dispatch) => {
    try {
      //aqui va la conexion cuando el endpoint este listo
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const deleteUser = (id) => {
  //FUNCTION TO DELETET USER BY ID
  return async function (dispatch) {
    try {
      await axios.delete(`${REACT_APP_BACKEND_USERS}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
};

//FUNCTION FOR EDIT A TESTIMONIAL EXISTING
export const editTestimonialForm = (existingTestimony) => {
  return async function (dispatch) {
    try {
      await axios.patch(
        `${REACT_APP_BACKEND_TESTIMONIALS}/${existingTestimony.id}`,
        existingTestimony
      );
    } catch (error) {
      throw new Error(error);
    }
  };
};

//FUNCTION FOR CREATE A NEW TESTIMONIAL
export const submitTestimonialForm = (testimony) => {
  return async function (dispatch) {
    try {
      await axios.post(`${REACT_APP_BACKEND_TESTIMONIALS}`, testimony);
    } catch (error) {
      throw new Error(error);
    }
  };
};

//FUNCTION FOR CREATE A NEW USER IN DATABASE
export const submitUserToDB = (user) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${REACT_APP_BACKEND_REGISTER}`, user);
      return response.data;
    } catch (error) {
      throw new Error(
        error?.response?.data?.message ||
          "No fue posible crear su cuenta, intentelo nuevamente."
      );
    }
  };
};

//FUNCTION FOR GET A VALID TOKEN FOR A NEW USER
export const createValidToken = (userData) => {
  return async function (dispatch) {
    try {
      const token = await axios.post(`${REACT_APP_BACKEND_LOGIN}`, {
        email: userData.email,
        password: userData.password,
      });
      return token.data.token;
    } catch (error) {
      throw new Error(error);
    }
  };
};

export { loginSlice, isMyUserLogged, submitUpdateDataOrganization, signOff, updateUserLogged };
export const { submitUserData, removeUserData } = loginSlice.actions;
export default loginSlice.reducer;
