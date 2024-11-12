import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { addFavorite,} from "./utils";
import{ Toaster } from 'react-hot-toast';


const ProductDetails = () => {
    const{product_id}=useParams()
    const data=useLoaderData()
    const [prodect,setProdect]=useState({})
    useEffect(()=>{
       const singleData= data.find(prodect=>prodect.product_id==product_id) 
       setProdect(singleData)
    },[data,product_id])


    const{product_title,product_image,category,description,price,specification,rating}=prodect;
  
    const handelFavorite=(prodect)=>{
        addFavorite(prodect)
        
    }

    return (
        <>
<Toaster></Toaster>
        <NavBar></NavBar>
        <div className="text-center bg-[#9538E2] py-4">
            <h1 className="font-bold text-3xl text-white">Product Details</h1>
            <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart<br></br> devices to the coolest accessories, we have it all!</p>
        </div>
    
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product_image}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div className="flex flex-col ">
            <h1 className="text-3xl font-bold">{product_title}</h1>     
            <p className="font-bold text-lg">{description}</p>
            <h1 className="font-bold">{category}</h1>
            <h1>specification:</h1>
             {/* <ul>
             {
                specification.map((item,i)=>(<li className="list-disc" key={i}>{item}</li>))
             }
             </ul> */}
             <p>Price:{price} $</p>
             <p>Rating:{rating}</p>
           <div className="pt-5 flex gap-4">
           <button onClick={()=>handelFavorite(prodect)} className="btn btn-primary ">Add To Card <i className="fa-solid fa-cart-shopping pl-3"></i></button>
           <button className=" btn bg-gray-500 border  rounded-full"><i className="fa-regular fa-heart"></i></button>
           </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default ProductDetails;