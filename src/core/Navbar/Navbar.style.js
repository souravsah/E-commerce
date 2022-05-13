
import styled from "styled-components";

export const NavbarCss = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: black;
  height: 150px;
  padding: 10px 25px;
`;

export const Logo = styled.div`
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');

  p {
    font-family: 'League Gothic', sans-serif;
    text-align: center;
    font-size: 20px;
  }
  img {
    width: 80px;
    height: 80px;
    filter: brightness(0) invert(1);
  }
  cursor: pointer;
`;

export const Icon = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 125px;

  @media (max-width: 650px) {
    width: 100px;
  }
`;

export const Ad = styled.div`
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');

height:35px;
background-color: #0f0f0f;
text-align: center;
padding-right: 20px;
padding-top: 8px;
color: white;
p{
  letter-spacing: 10px;
  font-family: 'League Gothic', sans-serif;
  
}
.unactive{
  display: none;
}

@media(max-width:600px){
  height: 45px;

  /* text-align: unset; */
  
  p{
    letter-spacing: 2px;
  }
}

`
export const Sidebar = styled.div`
z-index: 100;
position:relative;
top:-185px;
background-color: white;
width: 360px;
display: ${({first})=>first?"block":"none"};

`
