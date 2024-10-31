 import { createContext, useState } from "react"; // import context

 export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: () => {},
 }) // create context, ye use hoga navigation me main file me jaha provider functionality honi h 

 export const CartProvider = ({children}) =>{
    // actual useState
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen}
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
 }; // cart provider ye use hoga main index.js me wrap karne ke liye 