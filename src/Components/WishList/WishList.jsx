import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {  getWishList } from "../../Utils";
import Card from '../Card/Card';

const WishList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const addProduct = getWishList();
        setProducts(addProduct);
    }, [])

    return (
        <div>
             <div className="bg-[#9538E2]">
                <h1 className="text-center text-white font-bold text-3xl py-4">Deshboard </h1>
                <p className="text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex items-center gap-8 justify-center mt-6 mb-6 ">
                    <NavLink to='/deshboard'><button className="font-extrabold px-6 py-3 border-2 rounded-3xl text-white">Cart</button></NavLink>
                    <NavLink to='/wishlist'><button className="font-extrabold px-6 py-3 border-2 text-white rounded-3xl">Wishlist</button></NavLink>
                </div>
                <div className="h-[20px]">
                </div>
            </div>
            <div className='pb-80'>
                {
                    products.map(product => <Card product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default WishList;