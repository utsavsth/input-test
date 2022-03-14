import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import formReducer from './input/inputSlice';

export default configureStore({
  reducer:{
    counter: counterReducer,
    form: formReducer,
  },
})