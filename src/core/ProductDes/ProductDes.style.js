import styled from "styled-components";


export const Productdescss = styled.div `
display: flex;
justify-content:space-evenly;
margin: 15px 5px;
ul{
    width: 33%;
    li{
        list-style: none;
        margin: 10px 0;
    }
}
@media(max-width:750px){
    display: flex;
    text-align: center;
    flex-direction: column;
    ul{
        width:100%;
    }
}
`