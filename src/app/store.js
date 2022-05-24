import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import rootReducer from './reducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    rootReducer: rootReducer
  },
});
