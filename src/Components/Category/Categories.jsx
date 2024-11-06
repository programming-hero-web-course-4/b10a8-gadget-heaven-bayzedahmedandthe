import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (

        <div className="bg-white px-10 rounded-2xl mt-2">

            <button className="bg-gray-300 font-bold w-32 py-2 rounded-3xl my-5 hover:bg-[#9538E2] hover:text-white"> <NavLink to={`category/${categories.category}`}>{categories.category}
            </NavLink></button>


        </div>

    );
};

export default Categories;
