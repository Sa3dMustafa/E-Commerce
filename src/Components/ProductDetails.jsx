import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
function ProductDetails() {
    const apiUrl = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`${apiUrl}/${params.productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [params.productId]); 

    return (
        <>
            <Product product={product}  showButton= {false} />
        </>
    );
}

export default ProductDetails;
