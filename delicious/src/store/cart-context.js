import React from 'react';

// just initializing the values that can be accessed evrywhere in app.
const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    additem:(item)=>{},
    removeItem:(id)=>{},
});

export default CartContext;