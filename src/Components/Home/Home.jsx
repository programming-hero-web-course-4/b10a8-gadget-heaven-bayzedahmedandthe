import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg"
import { useEffect, useState } from "react";
import Categories from "../Category/Categories";


const Home = () => {
    const data = useLoaderData();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('./Categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);
    return (
        <div className=" w-11/12 mx-auto ">

            <div className="absulate">
                <section className=" mx-auto bg-[#9538E2] pt-10 rounded-b-3xl">
                    <h1 className="text-center text-white font-bold text-5xl">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className="text-center text-[#FFFFFF] pt-6">Explore the latest gadgets that will take your experience to  the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <div className="text-center">
                        <button className="text-[#9538E2] font-bold text-xl bg-white px-4 py-2 rounded-3xl mt-7 mb-40">Shop Now</button>
                    </div>

                </section>
                <div className="relative bottom-24">
                    <img className="border-2 p-4 lg:h-[580px] lg:w-[1110px] rounded-xl mx-auto " src={bannerImg} alt="" />
                </div>
            </div>

            <div className="lg:flex gap-10">

                <div >
                    <div className="bg-white px-10 rounded-2xl ">
                    <NavLink><button className="bg-gray-300 w-32 py-2 rounded-3xl my-5 font-bold hover:bg-[#9538E2] hover:text-white">All Products</button></NavLink>
                    </div>
                    {
                        category.map(cate => <Categories key={cate.product_id} categories={cate}></Categories>)
                    }

                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;