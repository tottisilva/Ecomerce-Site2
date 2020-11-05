import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen (props) {
    return <div>HomeScreen</div>
}
export default HomeScreen;
return <ul className="products">
    {
    data.products.map(product =>
        <li>
        <div className="product">
        <Link to={'/product/' + product._id}>{product.name}
            <img  className ="product-image" src={product.image} alt="products" /></Link>
            <div className="product-name">
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">€{product.price}</div>
            <div className="product-rating">{product.rating}Stars({product.numReviews})</div>

        </div>
    </li>
     )
    }
    </ul>
