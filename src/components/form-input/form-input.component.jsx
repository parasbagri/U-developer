import './form-input.style.scss';

// const FormInput = ({label, changeHandler,value}) =>{
//     return (
//         <div>
//         <label>{label}</label>
//         <input type="text" required onChange={changeHandler} name={value} id="" />
//         </div>
//     )

// }
const FormInput = ({label, ...otherProps}) =>{
    return  (
        <div className="group">
        <input className="form-input" {...otherProps} />
         {label &&(
         <label className={`${
            otherProps.value.lenght? 'shrink' : ''} form-input-label`}
            >{label}
            </label>
            )}
        
        </div>
    )
}
export default FormInput;