import toast from "react-hot-toast";

const getAllProducts = () => {
    const all = localStorage.getItem('favoriteProduct');

    if (all) {
        const favorite = JSON.parse(all);
        return favorite;

    }
    else {
        return [];
    }
};


const addProducts = (product) => {
    const favorites = getAllProducts();
    const isExist = favorites.find(item => item.product_id == product.product_id)
    if (isExist) return toast.error("Already exist")
    favorites.push(product);
    localStorage.setItem('favoriteProduct', JSON.stringify(favorites))
    toast.success("Product added succesfully")
};

export { addProducts, getAllProducts }