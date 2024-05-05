import { createSlice } from '@reduxjs/toolkit'

export const limitSlice = createSlice({
  name: 'limit',
  initialState: {
    value: 10,
  },
  reducers: {
    changeLimit: (state) => {
      state.value += 10
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