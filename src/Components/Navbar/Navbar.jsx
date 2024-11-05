import { PiShoppingCart } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../Utils";
const Navbar = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const addProduct = getAllProducts();
        setProducts(addProduct)
    }, [])
    return (
        <div>
            {/* Navbar section */}
            <section className="w-11/12 mx-auto bg-[#9538E2] rounded-t-3xl mt-8 ">
                <div className="px-12 ">
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li className="text-white"><NavLink to="/">Home </NavLink></li>

                                    <li><a>Statistics</a></li>
                                    <li ><Link to={'/deshboard'}>Deshboard</Link></li>
                                </ul>
                            </div>
                            <a className="text-xl font-bold text-white">Gadget Heaven</a>
                        </div>
                        <div className="navbar-center hidden lg:flex relative">
                            <ul className=" menu-horizontal  px-1">
                                <li className="text-white "><NavLink to="/">Home </NavLink></li>

                                <li className="text-white pl-6"><a>Statistics</a></li>
                                <li className="text-white pl-6"><Link to={'/deshboard'}>Deshboard</Link></li>
                            </ul>
                        </div>
                        <div className="navbar-end flax gap-4">
                            <h3 className=" h-12 w-12 rounded-full flex  pt-2 bg-white relative"><p className="pl-2 pt-[3px] text-2xl"><PiShoppingCart /></p>
                            <h5 className="text-red-700 font-medium text-2xl  pl-[2px] p-b-[8px] ">{products.length}</h5>
                            </h3>
                            <button className=" h-12 w-12 rounded-full flex justify-center pt-[3px] bg-white text-2xl"><p className="pt-2"><GiSelfLove /></p></button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner section */}

        </div>
    );
};

export default Navbar;