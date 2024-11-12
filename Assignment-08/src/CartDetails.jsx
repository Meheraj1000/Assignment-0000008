/* eslint-disable react/prop-types */
const CartDetails = ({ product,handelRemove }) => {


    
    const { product_image, category, product_title, price,product_id } = product || {}
    return (
        <>
          
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <div onClick={()=>handelRemove(product_id)} className="flex justify-end absolute -top-2 -right-0 border-2 rounded-full p-2 bg-orange-300">
                <i className="fa-solid fa-trash "></i>
            </div>
            <figure>
                <img
                    src={product_image}
                    alt="product" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <h2>{category}</h2>
                <p>price:{price}</p>
            </div>

        </div>

        </>
    );
};

export default CartDetails;