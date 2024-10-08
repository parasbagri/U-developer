import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const NaveBar = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link to='/'className="logo-container"> 
            <div>LOGO</div>
            </Link>
            <div className="nav-links-container">
                <Link to="/Shop" className="nav-link">Shop</Link>
            </div>
        </div>
        <Outlet />
      </Fragment> 
    );
  };

  export default NaveBar;