import './card-dropdown.styles.scss'
import Button from '../button/button.component'
import CardItem from '../cart-item/cart-item.compnent'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
const  CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) =>(<CardItem CardItem={item} key={item.id} />))}
            </div> 
            <Button>Go To</Button>

        </div>
    )
}  

export default CartDropdown;