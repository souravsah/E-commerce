import React from 'react'
import { GrClose } from 'react-icons/gr';
import { Cartcss } from './Cartcss.style'
const Cart = ({closeModal2}) => {
  return (
    <>
    <Cartcss>
        <div>
        <h1>
        Cart
        </h1>
        <span onClick={closeModal2}><GrClose/></span>
        </div>

        <ul>
            <li>

            </li>
        </ul>
    </Cartcss>
    </>
  )
}

export default Cart