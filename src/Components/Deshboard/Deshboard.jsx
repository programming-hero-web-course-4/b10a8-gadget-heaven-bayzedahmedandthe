import { useEffect, useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getAllProducts } from '../../Utils';
import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import vactor from "../../assets/Frame (5).png"

const Deshboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const addProduct = getAllProducts();
        setProducts(addProduct);
    }, [])
    return (
        <div>
            <div className="bg-[#9538E2]">
                <h1 className="text-center text-white font-bold text-3xl py-4">Deshboard </h1>
                <p className="text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex items-center gap-8 justify-center mt-6 mb-6 ">
                    <button className="font-extrabold px-6 py-3 border-2 rounded-3xl text-white">Cart</button>
                    <NavLink to='/wishlist'><button className="font-extrabold px-6 py-3 border-2 text-white rounded-3xl">Wishlist</button></NavLink>
                </div>
                <div className="h-[20px]">
                </div>
            </div>
            <div className='flex items-center w-10/12 mx-auto pt-12'>
                <h3 className='font-bold text-2xl'>Cart</h3>
                <div className='flex items-center gap-6 ml-96'>
                    <h2 className='font-bold text-2xl'>Total cost:</h2>
                    <button className='font-semibold text-[#9538E2] border-2 border-[#9538E2] rounded-3xl px-6 py-3 flex items-center gap-2'>Sort by price <p><img src={vactor} alt="" /></p></button>
                    <button className='font-medium text-white bg-[#9538E2] rounded-3xl px-5 py-3'>Purches</button>
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

export default Deshboard;