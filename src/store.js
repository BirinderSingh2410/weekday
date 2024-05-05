import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './features/dataSlice'
import limitSlice from './features/limitSlice'

export default configureStore({
  reducer: {
    data: dataSlice,
    limit: limitSlice
  },
})