import { PiShoppingCart } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import bannerImg from "../../assets/banner.jpg"
const Header = () => {
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
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li ><a>Home</a></li>

                                    <li><a>Statistics</a></li>
                                    <li ><a>Dashboard</a></li>
                                </ul>
                            </div>
                            <a className="text-xl font-bold text-white">Gadget Heaven</a>
                        </div>
                        <div className="navbar-center hidden lg:flex relative">
                            <ul className="menu menu-horizontal px-1">
                                <li className="text-white"><a>Home</a></li>

                                <li className="text-white"><a>Statistics</a></li>
                                <li className="text-white"><a>Dashboard</a></li>
                            </ul>
                        </div>
                        <div className="navbar-end flax gap-4">
                            <p className=" h-8 w-8 rounded-full flex justify-center pt-2 bg-white"><PiShoppingCart /></p>
                            <p className=" h-8 w-8 rounded-full flex justify-center pt-2 bg-white"><GiSelfLove /></p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner section */}
            <section className="w-11/12 mx-auto bg-[#9538E2] pt-10 ">
                <h1 className="text-center text-white font-bold text-5xl">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className="text-center text-[#FFFFFF] pt-6">Explore the latest gadgets that will take your experience to  the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="text-center">
                <button className="text-[#9538E2] font-bold text-xl bg-white px-4 py-2 rounded-3xl mt-7 mb-40">Shop Now</button>
                </div>
               
            </section>
            <div className="absolute lg:top-[414px] lg:left-[120px]">
                    <img className="border-2 p-4 lg:h-[580px] lg:w-[1110px] rounded-xl mx-auto " src={bannerImg} alt="" />
                </div>
        </div>
    );
};

export default Header;