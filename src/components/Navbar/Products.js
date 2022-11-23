import React from 'react'
import { popularProducts } from './data'
import Product from './Product'
import './Products.css'

const Products = () => {
  return (
    <div class='container'>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}

    </div>
  )
}

export default Products