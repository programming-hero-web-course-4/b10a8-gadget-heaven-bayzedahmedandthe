import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import { useEffect, useState } from "react";


const ProductCards = () => {
    const data = useLoaderData();
    console.log(data);
    const {category} = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
       if(category){
        const filteredByCategory = [...data].filter(product => product.category === category)
        setProduct(filteredByCategory);
       }
       else{
        setProduct(data)
       }
    } ,[data, category]);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-20">
            
            {
               product.map(pr => <Product key={pr.product_id} product={pr}></Product>) 
            }
        </div>
    );
};

export default ProductCards;