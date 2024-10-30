import {createContext, useState, useEffect} from 'react'
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from '../utils/firebase/firebase.utils' 

// as the atual value you want to access 
export const  UserContext = createContext({ // create context first 
    currentUser: null,
    setCurrentUser: () => null  // it will be used to update the user state in the context provider component  // this is just a example, you can use whatever you want. For example, a token or a user object.  // you can also use a library like 'react-jwt' to manage JWT tokens.  // here, it's just a function that does nothing.  // if you want to update the user state, you should call this function with the new user object.  // e.g., setCurrentUser(newUser) in your UserProvider component.  // this function will trigger a re-render of all the components that have subscribed to this context.  // you can also use a library like 'react-redux' to manage the user state in a more complex way.  // in this case, you would use the useSelector and useDispatch hooks to access and update the user state.  // also, you would use 

})

// as the provider component, this is atual component
export const UserProvider = ({children}) => {  
    // here you will manage the user state and provide it to the children components
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser};

    // signOutUser();
   
    useEffect(() => {
        // here you will listen for changes in the user's authentication state
       
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
            // console.log(user);
        }); 
        return unsubscribe;
    },[])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
 }