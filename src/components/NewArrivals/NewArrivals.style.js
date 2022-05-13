import styled from "styled-components";

export const Heading = styled.h1`
text-align: center;
margin: 10px 0;
`


export const NewArrivalscss = styled.div`
display: grid;
grid-template-columns: auto auto auto ;
margin: 10px 40px;

@media(max-width:600px){
    display: grid;
    grid-template-columns: auto;
    margin: 10px 50px;
    gap: 10px;
}

`