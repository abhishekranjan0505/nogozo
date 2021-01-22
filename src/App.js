import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "../src/component/Header/Header.js";
import HomePage from "./component/HomePage/HomePage";
import ShopsPage from "./component/Shops/Shops";
import ShopPage from "./component/Shop/Shop";
import Cart from "./component/Cart/Cart";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        <Route path="/" exact component={HomePage} />
        <Switch>
          <Route path="/shops/shop" component={ShopPage} />
          <Route path="/shops" component={ShopsPage} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
