import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducer'
import { productsAPi } from './api'

 const store = configureStore({
  reducer: {
   [productsAPi.reducerPath]: productsAPi.reducer,
    products:productReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPi.middleware),
})
export default store