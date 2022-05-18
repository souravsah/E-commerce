import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleData } from '../../redux/SinglePage/SinglePage.action';
import ProductDes from '../ProductDes/ProductDes';
import {Singlepagecss, Details ,Image,Licss,Size,Incrementcss} from "./Singlepage.style"
const Singlepage = () => {
  let {id}=useParams();
 const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(getSingleData(id))
 },[])
  console.log(id);
  let [counter,setCounter]=useState(0);
  const increment = () =>{
    setCounter((props)=>props+1);
  }
  const decrement = () =>{
    if(counter>1){
      setCounter((props)=>props-1)
    }else{
      setCounter(1);
    }
  }
  return (
    <div>
      <Singlepagecss>
      <Image >
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
      <div classNmae="four"></div>
      <div className="five"></div>
      <div className="six"></div>
    </Image>
    <Details>
    <ul>
    <li><h1>Wildfire</h1></li>
    <li><h1>Rs. 1,199</h1></li>
    <li>
        <h3>size</h3>
        <Licss>
            <li><h4>L</h4></li>
            <li><h4>M</h4></li>
            <li><h4>XL</h4></li>
        </Licss>
    </li>
    <li><h3>Color</h3>-Pink</li>
    <Incrementcss>
      <h4>Quantity</h4><br/>
      <span onClick={decrement}>-</span>
      <span>{counter}</span>
      <span onClick={increment}>+</span>
    </Incrementcss>
    <Size>
    <button><h2>ADD TO CART</h2></button>    
    </Size>    
    </ul>    
    </Details>
      </Singlepagecss>
      <div>
        <ProductDes/>
      </div>
    </div>
  )
}

export default Singlepage