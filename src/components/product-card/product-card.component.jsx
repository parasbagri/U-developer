import './product-card.style.scss'
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
const ProductCard = ({product}) => {
    const {imageUrl, price, name} = product
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product);
    return (  

            <div className='product-card-container'>
                <img src={imageUrl} alt={`${name}`}/> 
                <div className="footer">
                    <span className='name'>{name}</span>
                    <span className='price'>{price} {console.log(price)}</span>
                </div>
                <Button buttonType='inverted' onClick={addProductToCart} >Add To Card</Button>   
            </div>
    )

} 

export default ProductCard;