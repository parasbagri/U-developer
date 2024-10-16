import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.style.scss'
import { UserContext } from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils"
const NaveBar = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  // console.log(currentUser);

  const signOutHangler = async () => {
    await signOutUser()
    // console.log(res)
    setCurrentUser(null)

  }
    return (
      <Fragment>
        <div className="navigation">
            <Link to='/'className="logo-container"> 
            <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Shop" className="nav-link">Shop</Link>
                {currentUser? (<span className="nav-link" onClick={signOutHangler}>SIGN OUT</span>)
                :(<Link to="/auth" className="nav-link">SIGN IN</Link>)
                }
            </div>
        </div>
        <Outlet />
      </Fragment> 
    );
  };

  export default NaveBar;