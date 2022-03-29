import Mockman from "mockman-js";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { Home } from "./pages/Home/Home";
import {Profile} from "./pages/Profile/Profile";
import {Wishlist} from "./pages/Wishlist/Wishlist";
import {Bag} from "./pages/Bag/Bag";

function App() {
  return (
    <div >
      <Router>
        {/* <Header/> */}
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/product-listing" element={<ProductListing/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/wishlist" element={<Wishlist/>}></Route>
            <Route path="/bag" element={<Bag/>}></Route>
            <Route path="/mock" element={<Mockman/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
