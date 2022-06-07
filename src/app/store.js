import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import USER_LOGIN from './slice'
import CONTACTS from './contactSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    USER_LOGIN,   
    CONTACTS,
  },
});
