import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import  { Toaster } from 'react-hot-toast';


const Layout = () => {

    return (

           <div className="bg-gray-100">
            <Toaster />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );
};

export default Layout;