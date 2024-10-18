import { Fragment, useState } from "react"
import {
  signInWithGooglePopup, createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPass

 } from "../../utils/firebase/firebase.utils"
import FormInput from '../form-input/form-input.component'
import './sign-in-form.styles.scss'  
import Button from "../button/button.component"

const defaultFormFields = {
    email: '',
    password: '',
     // similarly add other fields as required by your application
}
const SignInFrom = () => { 
    
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password,  } = formFields
    console.log(formFields)

    const resetFormField = () =>{
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
      // remeber: when you ever to make call something from DB you need to make asynchronous function call
      const { user } = await signInWithGooglePopup();
      // console.log('Google Sign-in successful', response); // debugging info
      // 'response' ke andar 'user' object hota hai
     await createUserDocumentFromAuth(user);
      //     const user = response.user;
      // user.getIdToken().then((token) => {
      //   console.log("User Auth Token provided by google Compny 😂: ", token);
      // });
    };

    const handleSubmit = async (e) => {
      e.preventDefault(); // prevent default means i don't want baydefault anything 
    try{
        const response = await signInAuthUserWithEmailAndPass(email, password);
        console.log(response);
          resetFormField(); // reset form fields after successful signup   
        }catch(e){
          switch(e.code){
            case "auth/invalid-email":
            case "auth/user-not-found":  
            {
              alert("Invalid Email or User not found");
                  break;
            }
            case "auth/wrong-password":
            case "auth/invalid-credential":  
            {
              alert("Password is incorrect");
                  break;
            }
            case "auth/popup-closed-by-user":
              {
                alert("Popup closed by user");
                  break;
              }
            default:
              console.log(e);
          }
          // if(e.code === "auth/wrong-password")
          // {
          //   alert("Password is incorrect");
                  
          // }
          // console.log(e);
        }
    } 
    const handleChange = (e) =>{
        const {name, value } = e.target 
        setFormFields({...formFields, [name]:value })
    }
      return ( 

        <div className="sign-up-container">
        <Fragment> 
            <h2>Already have account just create</h2>
         <span> Sign in with your Email/Password</span>
         <form onSubmit={handleSubmit}>

            <FormInput label='Email' type="text" required onChange={handleChange}name='email' value={email}/>

            <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password}/>
            
            <div className="buttons-container">
             <Button type="submit">Sign in</Button>
             <Button type="button" buttonType='google' onClick={signInWithGoogle}  >Google Sign in</Button>    
            </div>
         </form>
         </Fragment>
        </div>
        // this component will render form to sign up user with email and password
        )
} 
export default SignInFrom; 