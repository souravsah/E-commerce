import React from 'react'
import img from './../../image/photo.jpg'
import { ProductBoxcss ,Imagebox, Details, Size } from './ProductBox.style'

const ProductBox = ({val=[]}) => {
    console.log(val.pImages[0])
  return (
      <>
      {val.length==0?"":
      <ProductBoxcss>
          <Imagebox>
              <img src={`/img/Basics.jpg`} alt="" />
          </Imagebox>
          <Details>
              <p>{val.pName}</p>
              <p>Rs 4522</p>
          </Details>
          <Size>
              <ul>
                  <li>30</li>
                  <li>32</li>
                  <li>34</li>
                  <li>36</li>
              </ul>
          </Size>
      </ProductBoxcss>
}
      </>
  )
}

export default ProductBox