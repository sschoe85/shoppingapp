import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { selectCartItems } from "../redux/cart/cart.selectors";
import "./CartDropDown.scss";
import CartItem from "./CartItem";
import CustomButton from "./CustomButton";

function CartDropDown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <CustomButton onClick={() => {history.push("/checkout"); dispatch(toggleCartHidden());}}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});


export default withRouter(connect(mapStateToProps)(CartDropDown));
