import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar1 from '../components/Navbar/Navbar1'
import  Store from './Store'
import  Accessories from './Accessories'
import Ipad from './Ipad'
import Iphone from './Iphone'
import Macbook from './Macbook'
import ImageSlider from '../components/Navbar/ImageSlider';
import { SliderData } from '../components/Navbar/SliderData';
import './Home.css'
import Bestseller from '../components/Navbar/Bestseller';
import Products from '../components/Navbar/Products';
import Cover from '../components/Navbar/Cover';
import Featured from '../components/Navbar/Featured';
import Footer2 from '../components/Navbar/Footer2';
import PaymentIcon from '../components/Navbar/PaymentIcons';
const Home = () => {
  return (
   <><ImageSlider slides={SliderData}/>
   <Bestseller/>
   <Products/>
   <Cover/>
   <Featured/>
   <Footer2/>
   <PaymentIcon/></>
  )
}

export default Home