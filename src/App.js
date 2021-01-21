import "./App.css";
import Header from "../src/component/Header/Header.js";
// import HomePage from "./component/HomePage/HomePage";
// import ShopsPage from "./component/Shops/Shops";
import ShopPage from "./component/Shop/Shop";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section>
        {/* <HomePage /> */}
        {/* <ShopsPage /> */}
        <ShopPage />
      </section>
    </div>
  );
}

export default App;
