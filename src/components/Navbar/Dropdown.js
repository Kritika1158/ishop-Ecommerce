import {MenuItems, MenuItems1, MenuItems3, MenuItems4, MenuItems5} from './MenuItems'
import React,{useState} from 'react'
import { Link } from "react-router-dom";
import './Dropdown.css'

const Dropdown = () => {
    const [click, setclick]=useState(false)
    const handleClick=()=> setclick(!click)
  return (
    <div className='container'>
    <div><ul onClick={handleClick} className={click? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {MenuItems.map((item,index)=>{
            return(
                <li key={index}>
                    <Link className={item.cName} to={item.path} onClick={()=>setclick(false)}>{item.title}</Link>
                </li>
            )
        })}</ul>
        
        </div>

<div><ul onClick={handleClick} className={click? 'dropdown-menu1 clicked' : 'dropdown-menu1'}>
{MenuItems1.map((item,index)=>{
    return(
        <li key={index}>
            <Link className={item.cName} to={item.path} onClick={()=>setclick(false)}>{item.title}</Link>
        </li>
    )
})}</ul>

</div>

<div><ul onClick={handleClick} className={click? 'dropdown-menu2 clicked' : 'dropdown-menu2'}>
{MenuItems3.map((item,index)=>{
    return(
        <li key={index}>
            <Link className={item.cName} to={item.path} onClick={()=>setclick(false)}>{item.title}</Link>
        </li>
    )
})}</ul>

</div>

<div><ul onClick={handleClick} className={click? 'dropdown-menu4 clicked' : 'dropdown-menu4'}>
{MenuItems4.map((item,index)=>{
    return(
        <li key={index}>
            <Link className={item.cName} to={item.path} onClick={()=>setclick(false)}>{item.title}</Link>
        </li>
    )
})}</ul>

</div>

<div><ul onClick={handleClick} className={click? 'dropdown-menu5 clicked' : 'dropdown-menu5'}>
{MenuItems5.map((item,index)=>{
    return(
        <li key={index}>
            <Link className={item.cName} to={item.path} onClick={()=>setclick(false)}>{item.title}</Link>
        </li>
    )
})}</ul>

</div>
</div>
  )
}

export default Dropdown