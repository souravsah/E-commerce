import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect } from 'react'
import { sliderAddata } from '../../api/imageslider'
import { useState } from "react";
import { Imageslidercss } from "./Imageslidercss.style";

const Imageslider = () => {
  let [Addata,setAddata]= useState([])


  const fetched = async () =>{
    const result =await sliderAddata();
    setAddata(result) 
  }

  useEffect(() => {
    fetched()
  }, []);
  let settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1500,
  };
  console.log(Addata)
  return (
    <>
    <Imageslidercss>
      <Slider {...settings}>
      {Addata.map((item,idx)=>
      <img src={`Add/${item.adImg}`} alt="" />
     )}

      </Slider>
    </Imageslidercss>
    </>
  )
}

export default Imageslider