import React from 'react'
import Cover from '../components/Navbar/Cover'
import Product from '../components/Navbar/Product'
import './Store.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { AppSettingsAltTwoTone, AppShortcutTwoTone, ArrowDropDownCircleTwoTone, CircleTwoTone, FiberManualRecord, FiberManualRecordOutlined, FiberManualRecordTwoTone, GridOnTwoTone, ViewHeadlineTwoTone } from '@mui/icons-material';
import { blueGrey } from '@mui/material/colors';
import { AppsTwoTone, ArrowDropDownTwoTone } from '@material-ui/icons';

function valuetext(value: number) {
  return `${value}°C`;
}

const Store = () => {
  return (
    <>
    <div className="Store">Store/Accessories</div>
    <div className='access' style={{marginLeft:'50px'}}>
        <h4 style={{marginLeft:'50px',fontSize:'20px'}}>ACCESSORIES</h4>
        <ul style={{listStyleType:'none'}}>
          <li style={{marginBottom:'10px'}}>Apple Car<span style={{marginLeft:'100px'}}>2</span></li>
          <li style={{marginBottom:'10px'}}>Air port and wireless<span style={{marginLeft:'30px'}}>48</span></li>
          <li style={{marginBottom:'10px'}}>Cables and docks<span style={{marginLeft:'52px'}}>14</span></li>
          <li style={{marginBottom:'10px'}}>Cases and Films<span style={{marginLeft:'56px'}}>15</span></li>
          <li style={{marginBottom:'10px'}}>Charging Devices<span style={{marginLeft:'47px'}}>23</span></li>
          <li style={{marginBottom:'10px'}}>Connected home<span style={{marginLeft:'56px'}}>1</span></li>
          <li style={{marginBottom:'10px'}}>Headphones<span style={{marginLeft:'80px'}}>95</span></li>
        </ul>
      </div>
      <div className='access1' style={{marginLeft:'50px'}}>
      <h4 style={{fontSize:'20px'}}>PRICES</h4>
      <p style={{marginBottom:'10px',marginLeft:'20px'}}>Ranger:<span style={{marginLeft:'92px'}}>$13.99-$25.99</span></p>
      <Box sx={{ width: 250, marginLeft:'20px' }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="primary"
      />
    </Box>
    </div>

    <div className='access1' style={{marginLeft:'50px'}}>
      <h4 style={{fontSize:'20px'}}>COLOR</h4>
      <CircleTwoTone className='dots dot1'/>
      <FiberManualRecord className='dots dot2'/>
      <FiberManualRecord className='dots dot3'/>
      <FiberManualRecord className='dots dot4'/>
      <FiberManualRecord className='dots dot5'/>
      <FiberManualRecord className='dots dot6'/>
    </div>

    <div className='access2' style={{marginLeft:'50px'}}>
        <h4 style={{fontSize:'20px'}}>BRAND</h4>
        <ul style={{listStyleType:'none'}}>
          <li style={{marginBottom:'10px'}}>Apple<span style={{marginLeft:'152px'}}>99</span></li>
          <li style={{marginBottom:'10px'}}>LG<span style={{marginLeft:'169px'}}>99</span></li>
          <li style={{marginBottom:'10px'}}>Samsung<span style={{marginLeft:'132px'}}>99</span></li>
          <li style={{marginBottom:'10px'}}>Siemens<span style={{marginLeft:'136px'}}>99</span></li>
        </ul>
      </div>

      <div className='access3' style={{marginLeft:'50px'}}>
        <h4 style={{marginLeft:'70px',fontSize:'20px'}}>MORE</h4>
      </div>  
      <div className="Banner"><h1 className="Written">iPhone 12 Plus</h1>
    <h2 className="Performance">Performance and Design. Taken <br></br> Right to the Edge</h2>
    <h5 className="Loa">Shop Now</h5>
    <img className="imag" src="https://pluspng.com/img-png/iphone-hd-png-iphone-in-hand-transparent-png-image-2382.png"/>
    </div>

    <div className='access4' style={{marginLeft:'400px'}}>
      <span className="More">13 items</span>
      <span className="More">Sort by</span>
      <span className="More"> Name</span>
      <ArrowDropDownCircleTwoTone/>
      <span className="More"> Show</span>
      <span className="More"> 12</span>
      <ArrowDropDownCircleTwoTone className="More"/>
      <span className="More1"><GridOnTwoTone className="More2"/>
      <ViewHeadlineTwoTone /></span>
    </div>
    
      </>
  )
}

export default Store