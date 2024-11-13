import { useLoaderData, useParams } from "react-router-dom";
import Cart from "./Cart";
import { useEffect, useState } from "react";


const ProductCart = () => {
    const data = useLoaderData()
    const { category } = useParams();

    const [product, setProduct] = useState([])
    useEffect(() => {
        if (category) {
            const filtercallByCategory = [...data].filter(product => product?.category === category);
            setProduct(filtercallByCategory)
        }
        else {
            setProduct(data)
        }
    }, [category, data]);

    return (
        <>
            <div className="flex justify-center items-center">
                <button className="btn " onClick={() => setProduct(data)}>View All</button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-7">
                {
                    product.map(product => <Cart key={product.product_id} product={product}></Cart>)
                }
            </div>

        </>
    );
};

export default ProductCart;