import React from 'react'
import { Icon, Logincss } from './Login.style'
import { GrClose } from 'react-icons/gr';

const Login = ({closeModal3}) => {
  return (
    <>
    <Icon onClick={closeModal3}>
      <GrClose/>
    </Icon>
    <Logincss>
        <div className='first'>
        <h2>
          Login
        </h2>
        <p>Get access to your Orders,Wishlist and Recommendations</p>
        </div>
        <div className='second'>
            <form action="">
              <div>
              <input type="text" placeholder='Enter Email' />
              </div>
              <div>
              <input type="password" name="" id="" placeholder='Enter Password' />
              </div>
                <h4>Forgot?</h4>
                <button type="submit">Login</button>
            </form>
            <h4>New to Biverty?Create an account</h4>
            {/* <form action="">

            </form> */}
        </div>
    </Logincss>
    </>
  )
}

export default Login