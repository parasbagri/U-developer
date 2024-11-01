import "./checkout.styles.scss"
import {CartContext} from '../../context/cart.context'
import { useContext } from "react";
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                   <span>Discription</span>
                </div>
                <div className="header-block">
                   <span>Quantity</span>
                </div>
                <div className="header-block">
                  <span>Price</span>
                </div>
                <div className="header-block">
                   <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => 
                     (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                    // <div key={cartItem.id}>
                    //     <h3>{cartItem.name}</h3>
                    //     <p>Price: ${cartItem.price}</p>
                    //     <p>Quantity: {cartItem.quantity}</p>
                    //     <br/>
                    //     <span onClick={() => removeItemToCart(cartItem)}>decreament</span>
                    //     <br/>
                    //     <span onClick={() => addItemToCart(cartItem)}>increament</span>
                    // </div>
)
            }
            <span className="total">Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout;