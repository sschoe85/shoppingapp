import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

function CartIcon(props) {
  return (
    <div className="cart-icon" onClick = {props.toggleCartHidden}>
      <ShoppingIcon />
      <span className="item-count">{props.itemCount}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
