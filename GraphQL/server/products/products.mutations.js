import { AddProduct, EditProduct, DeleteProduct} from "./products.models.js"

export const createProduct = (ProductToAdd)=>{
    try {

        const product = AddProduct(ProductToAdd)
        return product
        
    } catch (error) {
        return error
    }
}

export const updateProduct=(Product)=>{

    try {
        const product = EditProduct(Product)
        return product
        
    } catch (error) {
        return error
    }

}

export const deleteProduct=(id)=>{

    try {
        const resp = DeleteProduct(id)
        return resp
        
    } catch (error) {
        return error
    }

}