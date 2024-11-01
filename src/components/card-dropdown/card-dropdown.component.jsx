import './card-dropdown.styles.scss'
import Button from '../button/button.component'
import CardItem from '../cart-item/cart-item.compnent'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { useNavigate } from 'react-router-dom'
const  CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckoutHandler = () =>{
        navigate('/checkout')
        // or navigate to checkout page directly
        // window.location.href = '/checkout'
    }
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) =>(<CardItem CardItem={item} key={item.id} />))}
            </div> 
            <Button onClick={goToCheckoutHandler}>Checkout</Button>

        </div>
    )
}  

export default CartDropdown;