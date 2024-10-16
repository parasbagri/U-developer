import{ signInWithGooglePopup} from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import{signWihGoogleRedirect} from '../../utils/firebase/firebase.utils'
import SignUpFrom from '../../components/sign-up-form/sign-up-form.component' 

const SignIn = () => {
  // const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider); // this will open a new tab in browser for google login
  const logGoogleUser = async () => { // remeber: when you ever to make call something from DB you need to make asynchronous function call
    const {user} = await  signInWithGooglePopup();
    // console.log('Google Sign-in successful', response); // debugging info
        // 'response' ke andar 'user' object hota hai
    const userDocRef = await createUserDocumentFromAuth(user)
    //     const user = response.user;
    // user.getIdToken().then((token) => {
    //   console.log("User Auth Token provided by google Compny 😂: ", token);
    // });
  } 
  // const UserPhoto = logGoogleUser.UserCredentialImpl.user
  // const User =  user.getIdToken().then((token) => {
  //   console.log("User Auth Token: ", token);
  // });

// function for google redirect sign in 
//  const logGoogleRedirectUser = async ()=>{
//   const response = await signWihGoogleRedirect();
//   console.log(response);
//  }

  
    return (
          <div>
            <h1>Sign In Page:</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>  
            <SignUpFrom/>
          </div>
    )
}  
export default SignIn;