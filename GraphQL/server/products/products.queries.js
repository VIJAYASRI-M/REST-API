import { AllProducts, SingleProduct } from "./products.models.js"

export const listProducts=()=>{

    try {
        const products = AllProducts();
        return products
    } catch (error) {
       return error 
    }
}

export const product=(id)=>{
    try {
        const product = SingleProduct(id);
        return product[0]
    } catch (error) {
        return error
    }
}