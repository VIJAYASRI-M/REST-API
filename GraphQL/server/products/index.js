import { createProduct, deleteProduct, updateProduct } from "./products.mutations.js";
import { listProducts, product } from "./products.queries.js";

export const typeDefs = `
        type Product {
            id: ID
            name: String
            description: String
            price: Float
            availability: Boolean
            images: [Image]
            review: [Review]
            relatedProducts: [Product]
        }

        type ProductToAdd {
            name: String
            description: String
            price: Float
            availability: Boolean
            images: [Image]
            review: [Review]
            relatedProducts: [Product]
        }

        type Image{
            url: String,
            altText: String,
        }

        type Review{
            rating: Int
            comment: String
            user: User
        }
        
        type User{
            id: ID
            name: String
        }

        type Query{
            products: [Product]
            product(id: ID): Product
        }

        type Mutation{
            addProduct: Product
            updateProduct(id:ID): Product
            deleteProduct(id: ID): String
        }
`;


export const resolvers ={
    Query: {
        products: () => listProducts(),
        product: (_,{id}) => product(id),
    },

    Mutation: {
        addProduct: (_, {ProductToAdd})=>createProduct(ProductToAdd),
        updateProduct:(_,{Product})=>updateProduct(Product),
        deleteProduct:(_,{id})=>deleteProduct(id),
    }

};