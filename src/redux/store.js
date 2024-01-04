import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slides/counterSlice.js'
export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
