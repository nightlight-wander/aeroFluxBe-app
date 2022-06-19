import Mockman from "mockman-js";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { Home } from "./pages/Home/Home";
import {Login} from "./pages/Auth/Login";
import { Signup } from "./pages/Auth/Signup";
import {Wishlist} from "./pages/Wishlist/Wishlist";
import {Bag} from "./pages/Bag/Bag";
import {RequiresAuth} from "./utilities/RequiresAuth";
import { Address } from "./components/Address/Address";

function App() {
  return (
    <div >
      <Router>
        {/* <Header/> */}
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/product-listing" element={<ProductListing/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/wishlist" element={
              <RequiresAuth>
                <Wishlist/>
              </RequiresAuth>}>
            </Route>
            <Route path="/bag" element={
              <RequiresAuth>
                <Bag/>
              </RequiresAuth>}>
            </Route>
            <Route path="/address" element={<Address/>}></Route>
            <Route path="/mock" element={<Mockman/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
