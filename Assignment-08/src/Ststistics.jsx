
//import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
//import { BarChart, Bar, XAxis, YAxis } from 'recharts';


const Ststistics = () => {
//    const data=useLoaderData()
//    const{price}=data
//    console.log(data.price)
    return (
        <>
            <NavBar></NavBar>
            <div className="bg-[#9538E2]">
              <h1 className="text-center text-white font-bold text-3xl pt-4">Statistics</h1>
              <p className="text-center text-white py-3">Explore the latest gadgets that will take your experience to the next level. From smart devices <br></br> to the coolest accessories, we have it all!</p>
            </div>
           <div className="h-60">
            
          
           </div>
            <Footer></Footer>
        </>
    );
};

export default Ststistics;