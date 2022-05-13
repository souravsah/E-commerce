import React from 'react'
import { Formcss } from './Searchbar.style'
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

const Searchbar = ({closeModal1}) => {
  return (
      <Formcss action="">

          <input type="text" placeholder='Search'/>
          <span onClick={closeModal1}><GrClose/></span>
      </Formcss>
  )
}

export default Searchbar