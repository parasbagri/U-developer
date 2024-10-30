import './product-card.style.scss'
import Button from '../button/button.component';
const ProductCard = ({product}) => {
    const {imageUrl, price, name} = product
    return (  

            <div className='product-card-container'>
                <img src={imageUrl} alt={`${name}`}/> 
                <div className="footer">
                    <span className='name'>{name}</span>
                    <span className='price'>{price} {console.log(price)}</span>
                </div>
                <Button buttonType='inverted'>Add To Card</Button>   
            </div>
    )

} 

export default ProductCard;