import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:9000/products/${id}`).then((res) => {
      const productdata = res.data;
      setTitle(productdata.title);
      setDescription(productdata.description);
      setPrice(productdata.price);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9000/products/${id}`, {
        title: title,
        price: price,
        description: description,
      })
      .then((response) => {
        navigate("/products");
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error updating the product!", error);
      });
  };

  return (
    <>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            className="form-control"
            placeholder="productTitle"
            id="productTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            className="form-control"
            placeholder="productPrice"
            id="productPrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            type="text"
            className="form-control"
            placeholder="productDescription"
            id="productDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-primary">
          edit Product
        </button>
      </form>
    </>
  );
}

export default EditProduct;
