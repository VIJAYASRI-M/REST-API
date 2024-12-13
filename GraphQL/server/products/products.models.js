import db from "./db.js"

export const AllProducts=()=>{
    try {
        const products = db?.products;
        return products;
        
    } catch (error) {
       return error 
    }
}

export const AddProduct=(Product)=>{
    try {

        const newProduct= {id:(db.products.length+1).toString(), ...Product};
        db.products.push(newProduct);
        return newProduct;
        
    } catch (error) {
       return error 
    }
}

export const SingleProduct=(id)=>{
    try {

        const product= db?.products?.filter((product)=>product.id===id);
        return product
        
    } catch (error) {
       return error 
    }
}

export const EditProduct=(Product)=>{
    try {
        const {id} = Product;
        const index = db.products.findIndex((product)=>product.id===id)
        if(index==-1) throw new Error("Product to edit not found");
        else{
            Product.id= index
            db.products[index]=Product;
            return db.products[index]
        }
    } catch (error) {
       return error 
    }
}

export const DeleteProduct=(id)=>{
    try {
        const index = db.products.findIndex((product)=>product.id==id)
        if(index==-1) throw new Error("Product to delete not found");
        else{
            db.products.splice(index,1)
            return "Product deleted Successfully"
        }

    } catch (error) {
       return error 
    }
}
