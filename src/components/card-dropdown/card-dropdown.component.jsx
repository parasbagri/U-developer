import './card-dropdown.styles.scss'
import Button from '../button/button.component'

const  CartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'/> 
            <Button>Go To</Button>

        </div>
    )
}  

export default CartDropdown;