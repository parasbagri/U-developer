import './card-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

// const CardIconStyles = StyleSheet.create({ cardIcon }); 

// const CardIcon = ({ icon, size = 30, color = 'white' }) => {
//   return (
//     <div className={`card-icon ${icon} ${size}px ${color}`}>
//       {icon}
//     </div>
//   )
// }

const CardIcon = () => {
    return(
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
  
}

export default CardIcon;