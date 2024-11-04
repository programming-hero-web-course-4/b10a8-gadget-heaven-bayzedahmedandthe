

const Product = ({product}) => {
    const {product_image} = product;
    console.log(product);
    return (
        <div className="bg-white p-4 rounded-xl h-[350px]">
            <img className="rounded-xl" src={product_image} alt="" />
        </div>
    );
};

export default Product;