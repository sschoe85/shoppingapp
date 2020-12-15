import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { connect } from "react-redux";

function CartIcon(props) {
  return (
    <div className="cart-icon" onClick = {props.toggleCartHidden}>
      <ShoppingIcon />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
