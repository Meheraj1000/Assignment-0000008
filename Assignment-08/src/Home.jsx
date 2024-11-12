import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "./NavBar";
import Categories from "./Categories";
import Banner from "./Banner";
import Img from "./Img";
import{ Toaster } from 'react-hot-toast';
import Footer from "./Footer";



const Home = () => {
    const categories=useLoaderData()
    //console.log(categories)
    return (
        <div>
            <Toaster/>
           <div className="bg-[#8d0cf7]">          
           <NavBar></NavBar>
            <Banner title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} button={'Shop Now'}></Banner>
           </div>
           <Img></Img>
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;