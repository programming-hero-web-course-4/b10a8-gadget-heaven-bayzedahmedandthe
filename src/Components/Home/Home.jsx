import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="mt-[560px] w-11/12 mx-auto flex items-start gap-6">
            <div className="bg-white rounded-2xl px-10 py-4">
                <button className="bg-gray-200 w-32 py-2 rounded-3xl">All Product</button><br />
                <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">Laptops</button><br />
                <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">Phones</button><br />
                <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">Accessories</button><br />
                <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">Smart Watches</button><br />
                <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">MacBook</button><br />
                <button className="bg-gray-200 w-32 py-2 rounded-3xl mt-6">Iphone</button>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    data.map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;