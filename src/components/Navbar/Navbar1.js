import { CardTravelOutlined, CurrencyYenOutlined, PermIdentityOutlined, Search } from "@mui/icons-material"
import './Navbar.css'
import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import Dropdown from'./Dropdown'

function notificationsLabel(count: BigInteger) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 3) {
    return 'more than 3 notifications';
  }
  return `${count} notifications`;
}

const Navbar1 = () => {
  const [click,setClick]=useState(false)
  const [dropdown, setDropdown]=useState(false)
  const handleClick=()=>setClick(!click)
  const closeMobileMenu=()=>setClick(false)
  const onMouseEnter=()=>{
    if(window.innerWidth<960){
      setDropdown(false)
    }
    else{
      setDropdown(true)
    }
  }

  const onMouseLeave=()=>{
    if(window.innerWidth<960){
      setDropdown(false)
    }
    else{
      setDropdown(false)
    }
  }

  return (
    <>
    <div className="Navbar-1-container">
        <div className="Wrapper">
            <div className="Left">
                <select className="Language"><option value="English" selected>EN</option>
                                             <option value="Hindi">HI</option></select>
                <select className="Currency"><option value="Dollar" selected>$</option>
                                             <option value="Yen"><CurrencyYenOutlined/></option></select>                             
            </div>
            <div className="Right">
                                  <div className="MyProfile"><PermIdentityOutlined></PermIdentityOutlined><span className="Profile">My Profile</span></div>
                                   <div class="Cart">
                                   <IconButton aria-label={notificationsLabel(4)}>
                                    <Badge badgeContent={4} color="success" showZero>
                                    <CardTravelOutlined color="action" />
                                     </Badge>
                                     </IconButton><span className="Writeup">4 items $998</span></div>
                                  <span class="SearchContainer"><input className="input" /><Search style={{color:"grey"}}/></span></div>
        </div>
    </div>

    <div className="Navbar-2-container">
      <div className="Heading">iSHOP</div>  
    </div>
      <nav className="Navbar-3-container">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>HOME</Link>
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to ='/store' className='nav-links' onClick={closeMobileMenu}>STORE</Link>
            {dropdown &&<Dropdown/>}
          </li>
          <li className='nav-item'>
            <Link to ='/iphone' className='nav-links' onClick={closeMobileMenu}>IPHONE</Link>
            {dropdown &&<Dropdown/>}
          </li>
          <li className='nav-item'>
            <Link to ='/ipad' className='nav-links' onClick={closeMobileMenu}>IPAD</Link>
            {dropdown &&<Dropdown/>}
          </li>
          <li className='nav-item'>
            <Link to ='/macbook' className='nav-links' onClick={closeMobileMenu}>MACBOOK</Link>
            {dropdown &&<Dropdown/>}
          </li>
          <li className='nav-item'>
            <Link to ='/accessories' className='nav-links' onClick={closeMobileMenu}>ACCESSORIES</Link>
            {dropdown &&<Dropdown/>}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar1