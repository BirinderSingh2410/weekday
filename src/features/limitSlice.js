import { createSlice } from '@reduxjs/toolkit'

export const limitSlice = createSlice({
  name: 'limit',
  initialState: {
    value: 0,
  },
  reducers: {
    changeLimit: (state,action) => {
      state.value += action.payload
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

export const { changeLimit } = limitSlice.actions

export default limitSlice.reducer