import styled from "styled-components";

export const Cartcss = styled.div`
width: 32vw;
padding: 10px;
height: 700px;
div{
    padding: 10px;
    border-bottom: 1px solid #ccc;
    display:flex;
    justify-content:space-between;

    span{
        cursor: pointer;
    }
}
ul{
    height:400px;
}
@media(max-width:650px){
width:85vw ;
}
`