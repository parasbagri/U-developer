

// const FormInput = ({label, changeHandler,value}) =>{
//     return (
//         <div>
//         <label>{label}</label>
//         <input type="text" required onChange={changeHandler} name={value} id="" />
//         </div>
//     )

// }
const FormInput = ({label, ...otherProps}) =>{
    return (
        <div>
        <label>{label}</label>
        <input {...otherProps} />
        </div>
    )

}
export default FormInput;