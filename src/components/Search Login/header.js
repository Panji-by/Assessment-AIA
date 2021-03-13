import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { logout } from "../../redux/action/authAction";
import {connect, useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect, useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleSignOut = () => {
    props.dispatch(logout());
    // Cookies.remove('token');
    // localStorage.clear();
  }
  console.log(localStorage.getItem('token'), 'LOCAL');
  // sign out ends


  return (
    <div>
      <Navbar color="primary" className="mgbtm" light expand="md">
      <FontAwesomeIcon className='fa-4x nav-icon' icon={faCat} />
        
          <NavLink className="pstn-right" onClick={handleSignOut} href='/' title="Log Out">
            <button className='btn btn-lg btn-light'>Log Out</button>
          </NavLink>
       
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  let actions = bindActionCreators({logout});
  return {
    ...actions, dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (NavbarPage);
