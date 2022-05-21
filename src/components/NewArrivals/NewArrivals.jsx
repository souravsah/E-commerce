import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchNewArrival } from '../../api/Products'
import ProductBox from '../../core/ProductBox/ProductBox'
import { NewArrivalscss,Heading } from './NewArrivals.style'
import MyLoader from '../../core/Loader/MyLoader'
import { useDispatch } from 'react-redux'
import { getProductData ,getnavadData ,getImageSliderData} from '../../redux/HomePage/HomePage.action'
import { useSelector } from 'react-redux'

const NewArrivals = () => {
let dispatch =useDispatch()
let data = useSelector((state)=>state.HomePageReducer.productData)
dispatch(  getProductData());
dispatch(getnavadData())
  return (
    <div>
    <Heading>New Arrivals</Heading>
      <NewArrivalscss>
      {data.length?data.map((item,idx)=><ProductBox val={item} key={idx}/>):<MyLoader/>}
      </NewArrivalscss>
   </div> 
  )
}

export default NewArrivals