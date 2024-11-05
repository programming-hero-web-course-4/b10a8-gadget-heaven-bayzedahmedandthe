import { FaDollarSign } from "react-icons/fa6";

const Card = ({ product }) => {
    const { product_title, product_image, description, price } = product;
    return (
        <div>
            <div className="w-10/12 bg-white rounded-xl mx-auto mt-6 flex items-center gap-8">
                <div className='p-5'>
                    <img className="rounded-xl" src={product_image} alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold pb-5">{product_title}</h1>
                    <p className="text-[#09080F] py-3">{description}</p>
                    <h3 className="font-bold text-[20px] pt-5 flex items-center ">Price: <p><FaDollarSign /></p>{price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Card;