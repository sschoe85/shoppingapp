import React from "react";
import "./CartDropDown.scss";
import CustomButton from "./CustomButton";

function CartDropDown(props) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropDown;
