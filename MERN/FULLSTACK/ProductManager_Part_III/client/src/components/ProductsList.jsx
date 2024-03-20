import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get(`http://localhost:8000/api/products`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products on component mount

  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h2>All Products:</h2>
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="card">
              <div className="card-body">
                {/* Use Link to navigate to the detail page */}
                <Link to={`/product/${product._id}`}>{product.title}</Link>
              </div>
            </div>
          ))
        ) : (
          <div className="w-100">
            <div className="card text-center w-100">
              <div className="card-header">There are no products yet!</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsList;

