/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";


const Cart = ({ product }) => {
    const { product_image,product_id, category, product_title, price } = product || {}
    return (
        
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={product_image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <h2>{category}</h2>
                    <p>price:{price}</p>
                    <NavLink to={`/product/${product_id}`}>
                     <div className="card-actions justify-start">
                        <button className="btn btn-primary rounded-2xl">View Details</button>
                    </div>
                    </NavLink>
                </div>
            </div>
            
    );
};

export default Cart;