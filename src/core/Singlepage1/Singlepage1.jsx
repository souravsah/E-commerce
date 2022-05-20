import React from 'react'
import { Details, Image, Incrementcss, Licss, Singlepagecss, Size } from './Singlepage1.style'
import { useState } from 'react';
import ProductDes from '../ProductDes/ProductDes';
import MyLoader from '../Loader/MyLoader';

const Singlepage1 = ({data}) => {

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
  <li><h1> {data.pName } </h1></li>
  <li><h1>Rs.  {data.pPrice }</h1></li>
  <li>
      <h3>size</h3>
      <Licss>
        {
           data.pSize.map((item,idx)=>{
            <li key={idx}><h4>{item}</h4></li>
           }) 
        }
      </Licss>
  </li>
  <li><h3>Color</h3>-{data.pColor }</li>
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

export default Singlepage1