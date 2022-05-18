import React from 'react'
import Layout from '../../Layout/Layout'
import Imageslider from '../Imageslider/Imageslider'
import 'react-responsive-modal/styles.css';
import { getProductData , getImageSliderData ,getnavadData,} from '../../redux/HomePage/HomePage.action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NewArrivals from '../NewArrivals/NewArrivals';
const Homepagefinal = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProductData())
  },[])

  return (
    <Layout>
        <Imageslider/>
        <NewArrivals/>
  </Layout>
    )
}

export default Homepagefinal