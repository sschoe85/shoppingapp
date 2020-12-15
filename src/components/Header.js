import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "./CartIcon";
import CartDropDown from "./CartDropDown";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link to="/signin">SIGN IN </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
