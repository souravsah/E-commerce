import styled from "styled-components";

export const Formcss =styled.form`
width: 95vw;
height: 165px;
padding: 55px 15px;
/* background-color: #ccc; */
input{
    width: 95%;
    padding: 8px;
    border: none;
    outline: none;
}
span{
    cursor: pointer;
}

@media(max-width:650px){
    width:92vw;
    height:160px;
    input{
        width:85%;
    }
}
`