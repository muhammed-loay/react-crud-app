// import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Products() {
  const [products, setProducts] = useState([]);
  //   const [producte, setProducte] = useState({});

  useEffect(() => {
    getAllProducts();
  }, []); // Add dependency array to avoid infinite re-render

  const getAllProducts = () => {
    fetch("http://localhost:9000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const deleteProduct = (productId) => {
    Swal.fire({
      title: `Are you sure you want to delete this product?`,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:9000/products/${productId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            getAllProducts();
          });
      }
    });
  };

  return (
    <div>
      <h1>Products Page</h1>
      <Link to="/products/add" className="btn btn-success">
        Add New Product
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description.substring(0, 20)}...</td>
              <td>
                <Link
                  to={`/products/edit/${product.id}`}
                  type="button"
                  className="btn btn-primary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <Link
                  to={`/products/${product.id}`}
                  type="button"
                  className="btn btn-warning"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
