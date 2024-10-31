import "./cart-item.styles.scss"

const CardItem = ({CardItem}) => {
    const { imageUrl, price, name, quantity} = CardItem;
    return(
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`}/>
           <div className="item-details">
             <h2 className="name">{name}</h2>
             <span className="price">{quantity} X ${price}</span>
           </div>
        </div>
    )
}

export default CardItem;