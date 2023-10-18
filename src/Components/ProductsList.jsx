import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json()) // Corrected the response.json() function call
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-12 col-md-6 col-lg-3 " key={product.id}>
              <Product product={product} showButton={true} />{" "}
              {/* Pass the individual product to the Product component */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
