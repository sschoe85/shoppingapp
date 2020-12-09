import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SignInPage from "./pages/SignInPage";
import { auth } from "./firebase/firebase.utils";
import { useEffect, useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      return ()=>unsubscribeFromAuth();
    });
  });

  return (
    <>
      <Header currentUser = {currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInPage} />
      </Switch>
    </>
  );
}

export default App;
