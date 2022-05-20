import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getSingleData } from '../../redux/SinglePage/SinglePage.action';
import MyLoader from '../Loader/MyLoader';
import Singlepage1 from '../Singlepage1/Singlepage1';
const Singlepage = () => {
  let {id}=useParams();
 const dispatch = useDispatch();
 useEffect(()=>{
  dispatch(getSingleData(id))
 },[])
let {SinglePageReducer} = useSelector((state)=>state)
  console.log(id);
  console.log(SinglePageReducer.data.data)
  return (
    <>
    {SinglePageReducer.data.data?<Singlepage1 data={SinglePageReducer.data.data}/>:<MyLoader/> }
    </>

    // 
  )
}

export default Singlepage