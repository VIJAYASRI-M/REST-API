import React from 'react'
import { motion } from "framer-motion";

const Product = ({product}) => {
  const {name, description, price,images}=product
  return (
    <div className='Card'>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }} >
        <img className="img" src={images[0].url} alt={images[0].url}/>
        <h4 className="name">{name}</h4>
        <p className='desc'>{description}</p>
        <p className="price">$ {price}</p>
        </motion.div>
    </div>
  )
}

export default Product