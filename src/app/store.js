import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import USER_LOGIN from './slice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    USER_LOGIN,   
  },
});
