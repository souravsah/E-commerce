import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./../../image/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { NavbarCss, Logo, Icon, Ad, Sidebar, Blacksheet } from "./Navbar.style";
import {fetchnavbarAddata} from './../../api/navbarad'
import Slider from "react-slick";
import 'react-responsive-modal/styles.css';
import Searchbar from "../../components/Searchbar/Searchbar";
import Slidebar from "../../components/Slidebar/Slidebar";
import Imageslider from "../../components/Imageslider/Imageslider";
import Modal from 'react-modal';
import Cart from "../../components/AddtoCart/Cart"
import Login from "../Login/Login"
import { useDispatch } from "react-redux";
import { getImageSliderData, getnavadData, getProductData } from "../../redux/HomePage/HomePage.action";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";


const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};
const customStyles2 = {
  content: {
    top: '0',
    left: 'auto',
    right: '0',
    bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};
const customStyles1 = {
  content: {
    top: '0',
    left: '0',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  },
};
const customStyles3 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const Navbar = () => {
  let navigate =useNavigate()
  let dispatch = useDispatch();
  // useEffect(()=>{
    // dispatch(getProductData())
    dispatch(()=>{
      getnavadData()
    })
    dispatch(getImageSliderData())


  const [modalIsOpen1, setIsOpen1] = React.useState(false);

  function openModal1() {
    setIsOpen1(true);
  }

  function afterOpenModal1() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal1() {
    setIsOpen1(false);
  }


  // hello
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  function openModal2() {
    setIsOpen2(true);
  }

  function afterOpenModal2() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal2() {
    setIsOpen2(false);
  }
// third

const [modalIsOpen3, setIsOpen3] = React.useState(false);

function openModal3() {
  setIsOpen3(true);
}

function afterOpenModal3() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = '#f00';
}

function closeModal3() {
  setIsOpen3(false);
}
  //hii
  // let [Addata,setAddata] = useState([]);
  let [first,setfirst]= useState(false)
  let settimeoutid=useRef(null);
    // dispatch(getImageSliderData())
  // })
  let ata = useSelector((state)=>state.HomePageReducer ) || []
    console.log(ata)
  let Addata = useSelector((state)=>state.HomePageReducer.addData.data ) || []
  console.log(Addata)
  // const fetched = async () =>{
  //   const result =await fetchnavbarAddata();
  //   setAddata(result) 
  // }
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  // useEffect(() => {
  //   fetched()
  // }, []);
  let settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1500,
  };
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);
  const onOpenModal = () => setOpen(true);

  const handleClick = () =>{
    navigate('/');
  }

  return (
    <>
      <NavbarCss>
        <GiHamburgerMenu size={25} style={{ cursor: "pointer" }} 
        onClick={openModal}
        />
        <Logo onClick={handleClick}>
          <img src={logo} />
          <p>Biverty</p>
        </Logo>
        <Icon>
          <AiOutlineUser size={25} style={{ cursor: "pointer" }} onClick={openModal3}/>
          <BiSearchAlt2 size={25} style={{ cursor: "pointer" }} onClick={openModal1} />
          <BsHandbag size={25} style={{ cursor: "pointer" }} onClick={openModal2}/>
        </Icon>
      </NavbarCss>
      <Ad>
        <Slider {...settings}>
        {Addata.map((item,idx)=><p  key={idx}>{item.ad}</p>)}
        </Slider>
      </Ad>
      <Modal
        isOpen={modalIsOpen1}
        onAfterOpen={afterOpenModal1}
        onRequestClose={closeModal1}
        style={customStyles1}
        contentLabel="Example Modal"
      >
    <Searchbar closeModal1={closeModal1}/>
    </Modal>

    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <Slidebar closeModal={closeModal}/>
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        onAfterOpen={afterOpenModal2}
        onRequestClose={closeModal2}
        style={customStyles2}
        contentLabel="Example Modal"
      >

      <Cart closeModal2={closeModal2}/>
      </Modal>
      <Modal
        isOpen={modalIsOpen3}
        onAfterOpen={afterOpenModal3}
        onRequestClose={closeModal3}
        style={customStyles3}
        contentLabel="Example Modal"
      >

      <Login closeModal3={closeModal3}/>
      </Modal>

    </>
  );
};

export default Navbar;