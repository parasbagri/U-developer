import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.style.scss'
const NaveBar = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link to='/'className="logo-container"> 
            <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Shop" className="nav-link">Shop</Link>
                <Link to="/auth" className="nav-link">Sign In</Link>
            </div>
        </div>
        <Outlet />
      </Fragment> 
    );
  };

  export default NaveBar;