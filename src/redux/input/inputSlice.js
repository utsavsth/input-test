import { createSlice } from '@reduxjs/toolkit';
import {
  setAnswers,
} from '../../utils/form.utils';
export const inp = createSlice ({
  name: 'inp',
  initialState: {
    elements:[],
    answers: {},
  },
  reducers: {
    setElement: (state, action) => {
      state.elements = action.payload;
    },
    setAnswer: (state, action) => {
      state.answers = action.payload;
    },
    setElementAnswer: (state, action) => {
      let answers = setAnswers(action.payload, state.answers);
      state.answers = answers;
    }
  }
})

export const { setElement, setAnswer, setElementAnswer } = inp.actions

export default inp.reducer