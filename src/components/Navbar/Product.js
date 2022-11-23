import { Circle, FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, Star, StarBorder } from '@mui/icons-material'
import React from 'react'
import './Products.css'
const Product = ({item}) => {
  return (
    <div class='Container'><div className='Circle'/><img src={item.img} className="Image"></img>
    <div className='Info'><div className='Icon'><ShoppingCartOutlined/></div>
    <div className="Icon"><SearchOutlined/></div>
    <div className='Icon'><FavoriteBorderOutlined/>
    </div></div></div>
  )
}

export default Product