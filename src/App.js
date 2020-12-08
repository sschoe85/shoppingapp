import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path = '/' component ={HomePage}/>
      <Route exact path = '/shop' component= {ShopPage}/>
    </Switch>
    </>
  );
}

export default App;
