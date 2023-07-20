import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    cart : []
    // cart : [ {
    //     pizzaId : 12,
    //     name : 'Tomato',
    //     quantity : 2,
    //     unitPrice : 15,
    //     totalPrice : 30
    // }]
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers :{
        addItem(state,action){
            state.cart.push(action.payload)
        },
        deleteItem(state,action){
            state.cart = state.cart.filter((item)=> item.pizzaId !== action.payload)
        },
        increaseItem(state,action){
            const item = state.cart.find((item)=> item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItem(state,action){
            const item = state.cart.find((item)=> item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
            
            if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
        },
        clearCart(state){
            state.cart = []
        }
    }
})


export const { addItem, deleteItem, increaseItem , decreaseItem ,clearCart} = cartSlice.actions
export const getCart = (state)=> state.cart.cart
export const totalcartquantity = (state) => state.cart.cart.reduce((sum,item)=> sum + item.quantity , 0)
export const totalcartprice = (state) =>  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const usernameFromSlice = (state)=> state.user.username

export const getCurrentQuantityId = id => state => state.cart.cart.find(item=> item.pizzaId === id )?.quantity ?? 0
export default cartSlice.reducer
