import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getAllProducts = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${apiUrl}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const getProductsByCategory = (catName) => {
    fetch(`${apiUrl}/category/${catName}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="cat d-flex justify-content-center flex-wrap gap-md-4 mb-4">
        <button onClick={()=>{
          getAllProducts();
        }} className="btn btn-info mb-2 me-2">All</button>
          {categories.map((categorie) => (
            <button
              key={categorie}
              onClick={() => {
                getProductsByCategory(categorie);
              }}
              className="btn btn-info mb-2 me-2"
            >
              {categorie}
            </button>
          ))}
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-12 col-md-6 col-lg-3" key={product.id}>
              <Product product={product} showButton={true} hiddeDetiels={false}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
