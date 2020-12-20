import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "./SignInPage.scss";
function SignInPage(props) {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInPage;
