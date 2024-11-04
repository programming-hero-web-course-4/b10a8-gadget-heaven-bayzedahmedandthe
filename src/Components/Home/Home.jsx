import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import bannerImg from "../../assets/banner.jpg"
const Home = () => {
    const data = useLoaderData();
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
            <div className="flex gap-10">
                <div className="bg-white h-[455px] rounded-2xl px-10 py-4">
                    <button className="bg-gray-200 w-32 py-2 rounded-3xl">All Product</button><br />
                    <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">Laptops</button><br />
                    <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">IPhone</button><br />
                    <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">Smart Watches</button><br />
                    <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">Accessorise</button><br />
                    <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">MacBook</button><br />
                    <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">phones</button>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

                    {
                        data.map(product => <Product product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;