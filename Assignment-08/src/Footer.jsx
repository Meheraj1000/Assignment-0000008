
const Footer = () => {
    return (
        <div className="bg-[#FFFFFF] m-8 p-4 border-2">
            <div className="text-center">
                <h1 className="font-bold text-3xl pt-8">Gadget Heaven</h1>
                <p className="py-2">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr/>
           <div  className="">
           <div className="flex justify-around pt-4">
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-xl">Services</h1>
                    <a href="">product Support</a>
                    <a href="">Order Tracking</a>
                    <a href="">Shopping & Delivery</a>
                    <a href="">Returns</a>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-xl">Company</h1>
                    <a href="">About Us</a>
                    <a href="">Careers</a>
                    <a href="">Contact</a>
                    
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold text-xl">Legal</h1>
                    <a href="">Rerms of Service</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookie Policy</a>
                    
                </div>
                
            </div>
           </div>
        </div>
    );
};

export default Footer;