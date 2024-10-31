import './card-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext, useState } from 'react'
import {CartContext} from '../../context/cart.context'

// const CardIconStyles = StyleSheet.create({ cardIcon }); 

// const CardIcon = ({ icon, size = 30, color = 'white' }) => {
//   return (
//     <div className={`card-icon ${icon} ${size}px ${color}`}>
//       {icon}
//     </div>
//   )
// }

const CardIcon = () => {
    const {isCartOpen,setIsCartOpen} = useContext(CartContext)
    const toggleIsCartOpen = () => {
        console.log("isCartOpen")
        return setIsCartOpen(!isCartOpen)
    }
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
  
}

export default CardIcon;