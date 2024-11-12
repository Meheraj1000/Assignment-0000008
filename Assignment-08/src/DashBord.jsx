import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getAllFavorites, remooveFavorite } from "./utils";
import CartDetails from "./CartDetails";
import { Toaster } from 'react-hot-toast';
import { handelCartdbtn, handelwistlist } from "./feacture";
import Footer from "./Footer";




const DashBord = () => {

    const handelRemove = product_id => {
        remooveFavorite(product_id)
        const favorites = getAllFavorites()
        setProdect(favorites)
    }

    const [prodect, setProdect] = useState([])
    useEffect(() => {
        const favorites = getAllFavorites()
        setProdect(favorites)
    }, [])

    const handelSort=(sortBy)=>{
        if(sortBy=='price'){
            const sorted=[...prodect].sort((a,b)=>b.price-a.price)
              setProdect(sorted)
        }
       }

    return (
        <>
            <Toaster></Toaster>
            <NavBar></NavBar>
            <div>
                   <div className="flex flex-col justify-center items-center bg-[#9538E2]">
                    <h1 className="text-center text-3xl font-bold py-4">Dashboard</h1>
                    <p className="text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to<br></br> the coolest accessories, we have it all!</p>
                    <div className="flex gap-8 p-6">
                        <button id="btn-show-cart" onClick={()=>handelCartdbtn()} className="btn px-8 rounded-full border-2 border-zinc-400">Cart</button>
                        <button id="btn-show-wishlist" onClick={()=>handelwistlist()}  className="btn px-8 rounded-full border-2 border-zinc-400">Wishlist</button>
                    </div>
                   </div>
                   <div id="showCart" className="hidden">
                   <div className="flex justify-between pt-4 px-4">
                  <div><h1  className="font-bold text-xl">Cart</h1></div>
                 <div className=" flex justify-between items-center gap-4">
                    <div className="font-bold">Total Cast:</div>
                    <div className="flex gap-4">
                    <button onClick={()=>handelSort('price')} className="btn px-8 rounded-full border-2 border-zinc-400">Sort by price</button>
                    <button className="btn px-8 rounded-full border-2 border-zinc-400">Purchase</button>
                    </div>
                </div>
            </div>
             </div>
             <div id="show-wistlist" className="hidden">
                  <div className="pt-4 pl-5">
                  <h1 className="font-bold text-xl">WishList</h1>
                  </div>
             </div>
                {/*  */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
                    {
                        prodect.map(product => <CartDetails handelRemove={handelRemove} key={product.product_id} product={product}></CartDetails>)
                    }
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default DashBord;