import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

function Product(props) {
    const { product, showButton, hideDetails } = props;
    const location = useLocation();

    // Define the description to be displayed based on the route
    const descriptionToShow = location.pathname === "/" ? product.description.substring(0, 100) : product.description;

    return (
        <div className="card mb-3 shadow-lg d-flex align-items-center">
            <img src={product.image} className="card-img-top height-200 p-4" alt={product.title} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{descriptionToShow} {location.pathname === "/" && "...."}</p>
                <p>Price: {product.price}$</p>
                {showButton && (
                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                        Details
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Product;
