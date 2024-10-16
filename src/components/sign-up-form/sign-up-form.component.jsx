import { Fragment, useState } from "react"
import { createAuthUserWithEmailAndPass, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''  // similarly add other fields as required by your application
}


const SignUpFrom = () => { 
    
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields
    console.log(formFields)

    const resetFormField = () =>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
      e.preventDefault(); // prevent default means i don't want baydefault anything 

      // if password is mot match 
      if (password !== confirmPassword) {
        alert("passwords do not match");
        return
    }
    try{
            const {user} = await createAuthUserWithEmailAndPass(email,password);
            // console.log(reponse); // debugging info
            await createUserDocumentFromAuth(user, {displayName}); // create user document in firestore
            resetFormField(); // reset form fields after successful signup  
            
    }catch(e){
        if(e.code === 'auth/email-already-in-use')
        {
            alert('Email already in use, please try a different one.');
        }
        else{
            console.log(e);

        }
    }
    }

//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       if (password !== confirmPassword) {
//           alert("Passwords do not match");
//           return;
//       }
  
//       try {
//           const userCredential = await createAuthUserWithEmailAndPass(email, password);
//           console.log(userCredential); // Ye `UserCredentialImpl` object ko console me dikhayega
//           console.log("User created successfully:", userCredential.user);  // Ye user ki details dikhayega
//       } catch (error) {
//           console.log("Error in creating user:", error);
//       }
//   };
  
    const handleChange = (e) =>{
        const {name, value } = e.target 
        setFormFields({...formFields, [name]:value })
    }

      return ( 
        <Fragment> 
         <h1> Sign Up with your Email/Password</h1>

         <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" required onChange={handleChange} name='displayName' value={displayName}/>

            <label>Email</label>
            <input type="text" required onChange={handleChange}name='email' value={email}/>

            <label>Password</label>
            <input type="password" required onChange={handleChange} name='password' value={password}/>
            
            <label>Confirm Password</label>
            <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/> 

            <button type="submit">Sign Up</button>
         </form>
        </Fragment>
        // this component will render form to sign up user with email and password
        )
} 


export default SignUpFrom; 