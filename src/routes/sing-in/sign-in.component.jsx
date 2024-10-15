 
import{ signInWithGooglePopup} from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
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
  
    return (
          <div>
            <h1>Sign In Page:</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>  
             {/* when button is clicked, logGoogleUser function will be called */}
             {/* <img src={UserPhoto} alt="User's Photo" /> this will show user's photo when they sign in */}  
             {/* <p>{User}</p> */}
          </div>
    )
}  
export default SignIn;