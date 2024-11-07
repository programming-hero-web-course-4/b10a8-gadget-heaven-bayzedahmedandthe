import { useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import { addProducts, addWishList} from "../../Utils";
import { useState } from "react";

const ProductDetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id)
    const product = data.find(product => product.product_id == id)
    const { product_image, product_title, price, description, specification, rating } = product || {};

    const handleAdd = (product) => {
        addProducts(product)   
    }
    const handleAddWish = (product) => {
        addWishList(product);
        
    }
    return (
        <div >
            <div className="bg-[#9538E2] relative">
                <h1 className="font-bold text-3xl text-center pt-12 text-white">Product Details</h1>
                <p className="text-center text-white pt-4 pb-36">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="bg-white p-8 rounded-xl w-3/5 relative bottom-20  left-64">
                <div className="flex items-center gap-6 ">
                    <div className=" h-[400px]">
                        <img className="rounded-xl mt-28" src={product_image} alt="" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-3xl pb-2">{product_title}</h1>
                        <p className="flex items-center">Price: <p className="ml-1"><FaDollarSign /></p>{price}</p>
                        <button className="bg-[#309C081A] rounded-3xl px-4 py-1 border border-green-500 text-green-600 my-3">In stok</button>
                        <p className="text-[#09080F99]">{description}</p>
                        <p className="font-bold text-xl pt-3">Specification:</p>
                        {

                            specification && specification.map((speci, idx) => <ul key={idx}><li>{speci}</li></ul>)
                        }
                        <h2 className="font-bold text-xl pt-1">rating</h2>
                        <div className="flex items-center gap-3 pt-3">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>{rating}</p>
                        </div>
                        <div className="flex items-center gap-3 pt-4">
                            <button
                            onClick={() => handleAdd(product)}
                                className="font-bold flex items-center gap-2 hover:border-[#9538E2] bg-[#9538E2] hover:text-[#9538E2] hover:bg-gray-300 hover: px-4 py-2 rounded-3xl text-white">Add to cart <p className="text-2xl"><PiShoppingCart /></p></button>
                            <button
                             onClick={() => handleAddWish(product)}
                             className="border-2 rounded-full p-3"><GiSelfLove /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;