import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchNewArrival } from '../../api/Products'
import ProductBox from '../../core/ProductBox/ProductBox'
import { NewArrivalscss,Heading } from './NewArrivals.style'
const NewArrivals = () => {
  let [data,setData] = useState([])
  const getNewArrival =async() =>{
    try {
      const value = await fetchNewArrival();
      setData(value.data);
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getNewArrival()
  },[])

  return (
    <div>
    <Heading>New Arrivals</Heading>
      <NewArrivalscss>
      {data.length?data.map((item,idx)=><ProductBox val={item} key={idx}/>):<h1>Loading...</h1>}
      </NewArrivalscss>
   </div> 
  )
}

export default NewArrivals