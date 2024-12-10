import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>; //will represent the shape of the store's state
export type AddDispatch = typeof store.dispatch;
export default store;