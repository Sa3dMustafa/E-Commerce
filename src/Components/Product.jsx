import React, { useState } from "react";
import {Link} from 'react-router-dom'
function Product(props) {
    const { product,showButton } = props;

    return (
        <div className="card mb-3 shadow-lg">
            <img src={product.image} className="card-img-top height-200 p-4" alt={product.title} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text min-h">{product.description}</p>
                    <p>Price : {product.price}$</p>
                    {showButton && <Link to={`/product/${product.id}`} className="btn btn-primary">Detailes</Link>}
            </div>
        </div>
    );
}

export default Product;
