import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";

function CartIcon(props) {
  return (
    <div className="cart-icon" onClick = {props.toggleCartHidden}>
      <ShoppingIcon />
      <span className="item-count">{props.itemCount}</span>
    </div>
  );
}

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
