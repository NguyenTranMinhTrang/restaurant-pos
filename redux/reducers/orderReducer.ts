import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderIem } from '~/app/payment';
import orders from '../../data/order.json';
import { Item } from '~/components/memu/ListMenu';

interface OrderState {
    orders: OrderIem[],
}

const initialState: OrderState = {
    orders: orders,
}

const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        addOrder(state, action: PayloadAction<Item>) {
            const findItem = state.orders.find(item => item.id === action.payload.id);

            if (findItem) {
                state.orders = state.orders.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })

            } else {
                state.orders.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    quantity: 1,
                    img: action.payload.img,
                    vegOrNonVeg: action.payload.vegOrNonVeg
                })
            }

        },
        increaseQuantity(state, action: PayloadAction<number>) {
            state.orders = state.orders.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
        },
        decreaseQuantity(state, action: PayloadAction<number>) {
            state.orders = state.orders.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item
            })
        },
        deleteOrder(state, action: PayloadAction<number>) {
            state.orders = state.orders.filter(item => item.id !== action.payload)
        }
    }
})

export const { addOrder, decreaseQuantity, increaseQuantity, deleteOrder } = orderSlice.actions
export default orderSlice.reducer