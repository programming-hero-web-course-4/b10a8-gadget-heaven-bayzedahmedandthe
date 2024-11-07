// import { Navigate, useLoaderData, useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";


const Product = ({product}) => {
    const {product_image, product_title, price, product_id } = product || {};
    return (
        <div className="bg-white p-4 rounded-xl ">
            <img className=" rounded-xl lg:h-[170px] flex mx-auto w-full" src={product_image} alt="" />
            <h1 className=" text-2xl font-semibold pt-6">{product_title}</h1>
            <p className="pt-3 text-xl font-medium text-[#09080F99]"> Price: {price}</p>
            <Link to = {`/product/${product_id}`}><button
            className="border-2 border-fuchsia-800 px-4 py-2 rounded-3xl mt-4 font-semibold text-xl text-[#9538E2]">View Details</button></Link>
        </div>
    );
};

export default Product;