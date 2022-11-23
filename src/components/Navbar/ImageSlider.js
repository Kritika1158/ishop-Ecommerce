import React, {useState} from 'react'
import { SliderData } from './SliderData'
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { ArrowBackIosNewOutlined, ArrowBackIosNewRounded, ArrowForwardIosOutlined, ArrowForwardIosRounded } from '@mui/icons-material';
const ImageSlider = ({slides}) => {
    const[current, setCurrent]=useState(0)
    const length=slides.length

    const nextSlides=()=>{
        setCurrent(current === length-1 ? 0:current+1);
    }

    const prevSlides=()=>{
        setCurrent(current === 0 ? length-1:current-1);
    }

    console.log(current)
    if(!Array.isArray(slides) || slides.length<=0){
        return null;
    }
  return (
    <section className="slider" current={current}>
        <ArrowBackIosNewRounded className="Left-arrow" onClick={prevSlides}/>
        <ArrowForwardIosRounded className="Right-arrow" onClick={nextSlides}/>
        {SliderData.map((slide,index)=>{
            return(
                <div className={index === current ?'slide active': 'slide'} key={index}>
                    {index === current &&(<img src={slide.image} alt='carousal' className='image'/>)}</div>
            ) 
        })}
    </section>
  )
}

export default ImageSlider