import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addproduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  let navigate = useNavigate();

  const formsubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/products", {
        title,
        price,
      })
      .then((res) => {
        navigate("/products");
        console.log(res.data);
        setTitle("");
        setPrice(0);
      });
  };

  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={formsubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="productTitle"
            id="productTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number" // Corrected input type
            className="form-control"
            placeholder="productPrice"
            id="productPrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)} // Convert to number
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default Addproduct;
