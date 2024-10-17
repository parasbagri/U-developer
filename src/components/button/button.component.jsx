import { Fragment } from "react"
import './button.styles.scss'

/* 
we have 3 kind of button 1. default, 2. inverted, 3. google sign in, so whow we evaluvate this one button for 3 diirent type button  

*/
// buttons variables 
const BUTTON_TYPE_CLASSES = {
    google:  'google-sign-in',
    inverted:'inverted'
}
const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <Fragment>
            <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps} type="submit">
                {children}
                <i className="fas fa-shopping-cart"></i> 
            </button>
        </Fragment>
        )
}

export default Button;
