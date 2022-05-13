import styled from "styled-components";

export const Footercss = styled.div`
display: flex;
div{
    width: 25%;
    padding: 10px;
    h4{
        color: black;
        padding: 9px 0;
    }
    p{
        color: #ccc;
        padding: 5px 0;
        word-spacing: 3px;
    }
    li{
        color: #ccc;
        padding: 10px 0;
        list-style: none;
    }

    }
    @media(max-width:600px){
        flex-direction: column;
        text-align: center;
        div{
        width: 100%;
        padding: 10px;
        }

}

`
export const Animation = styled.div`
p:hover{

text-decoration: underline;
text-decoration-color: black;
text-decoration-thickness: 2px;
cursor: pointer;
}
p{
    @media(max-width:600px){
        display: ${({animation})=>animation?"block":"none"};
    }
}


`
export const Footercs = styled.div`
text-align: center;
height:50px;
color:white;
padding-top: 15px;
background-color: black;
`
export const Firstdiv = styled.div`
p{
    @media(max-width:600px){
        display: ${({firstdiv})=>firstdiv?"block":"none"};
    }
}
`

export const Better = styled.div`
    @media(max-width:600px){

ul{
    display: ${({better})=>better?"block":"none"};
}
    }
`
export const Customer = styled.div`
    @media(max-width:600px){

        display: ${({customer})=>customer?"block":"none"};
    }
`