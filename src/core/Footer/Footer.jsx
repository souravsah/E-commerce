import React from "react";
import { useState } from "react";
import { Animation, Footercs, Footercss ,Firstdiv ,Better ,Customer} from "./Footer.style";
const Footer = () => {
  let [data,setData] = useState({
    firstdiv:false,
    animation:false,
    better:false,
    customer:false,
  })

  return <>
  <Footercss>
  <Firstdiv
  onClick={()=>{
    setData({
      ...data,
      ["firstdiv"]:!data.firstdiv
    })
  }}

  firstdiv={data.firstdiv}
  >
    <h4>ABOUT SNITCH</h4>
    <p>
      Encapsulating inspirations from around the globe, SNITCH crafts clothing for the fashion-forward modern man.
      Offering an unconventional style ethos as a men's fast fashion brand ,we design style in response to the latest trends
    </p>
  </Firstdiv>
  <Animation
  onClick={()=>{
    setData({
      ...data,
      ["animation"]:!data.animation
    })
  }}
  animation={data.animation}
  
  >
    <h4>RETURNS & EXCHANGE</h4>
    <p>Click To Place Return Request</p>
    <p>Returns & Exchange Policy</p>
    <p>Track Order</p>
  </Animation>
  <Better
    onClick={()=>{
      setData({
        ...data,
        ["better"]:!data.better
      })
    }}
  better={data.better}
  >
    <h4>GET TO KNOW US BETTER</h4>
    <ul>
      <li>CSR</li>
      <li>FAQ</li>
      <li>Blogs</li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
      <li>Payment Terms</li>
      <li>Contact Us</li>
    </ul>
  </Better>
  <Customer
    onClick={()=>{
      setData({
        ...data,
        ["customer"]:!data.customer
      })
    }}
  customer={data.customer}
  >
    <h4>CUSTOMER CARE:<br/>10 AM - 6:30 PM(MON-SAT)</h4>
    <p>+91 xxx xxxx xxxx</p>
    <p>support@......</p>
  </Customer>

  </Footercss>
  <Footercs>
    <h4>@ {new Date().getFullYear()} BIVERTY | All Rights Reserved</h4>
  </Footercs>
  </>;
};

export default Footer;
