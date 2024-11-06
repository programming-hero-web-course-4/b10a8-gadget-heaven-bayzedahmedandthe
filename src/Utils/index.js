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
    if (isExist) return toast.error("This item already exist")
    favorites.push(product);
    localStorage.setItem('favoriteProduct', JSON.stringify(favorites))
    toast.success("Product added succesfully")
};




const getWishList = () => {
    const allData = localStorage.getItem('wishList');
    if(allData) {
        const wishPr = JSON.parse(allData);
        return wishPr;
    }
    else{
        return [];
    }
};

const addWishList = (product) => {
    const favPro = getWishList();
    const isPro = favPro.find(pro => pro.product_id == product.product_id);
    if(isPro) return toast.error('This item already exist')
    favPro.push(product);
    localStorage.setItem('wishList', JSON.stringify(favPro))
    toast.success('Wish Successfull')
}

export { addProducts, getAllProducts, addWishList,getWishList  }