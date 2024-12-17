import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {getFromLocalStorage, saveToLocalStorage} from "@/components/Helper/localStorage";

export interface CartItem {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
    quantity: number
}

interface CartState {
    items: CartItem[],
}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart', initialState, reducers: {
        addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
            saveToLocalStorage("cart", state.items)
        },
        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id != action.payload.id)
                }
            }
            saveToLocalStorage("cart", state.items)
        },

        clearCart: (state) => {
            state.items = []

            saveToLocalStorage("cart", state.items)
        },
        hydrateCart: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
        },
    }
})

export const {addItem, removeItem, clearCart, hydrateCart} = cartSlice.actions
export default cartSlice.reducer