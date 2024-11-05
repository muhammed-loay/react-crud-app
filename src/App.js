import "./App.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Addproduct from "./pages/Addproduct";
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/Editproduct";
function App() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exac path="/products" element={<Products />} />
            <Route exact path="/products/add" element={<Addproduct />} />

            <Route exact path="/products/edit/:id" element={<EditProduct />} />

            <Route
              exact
              path="/products/:productID"
              element={<ProductDetails />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
