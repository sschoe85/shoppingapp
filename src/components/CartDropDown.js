import React from "react";
import { connect } from "react-redux";
import "./CartDropDown.scss";
import CartItem from "./CartItem";
import CustomButton from "./CustomButton";

function CartDropDown({cartItems}) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
      }
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropDown);
