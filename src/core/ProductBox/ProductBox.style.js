import styled from "styled-components";

export const ProductBoxcss = styled.div`
width: 340px;
cursor: pointer;
`
export const Imagebox = styled.div`
    position: relative;
    img{
        width:340px;
    }
    button{
    
    background-color: black;
    color: white;
    width: 320px;
    height: 30px;
    outline: none;
    border: none;
    position: absolute;
    margin: 5px;
    left :0;
    top:470px;
    }

    @media(max-width:600px){
        img{
            width:280px;
        }
    }    

`
export const Details = styled.div`
text-align: center;

`
export const Size = styled.div`
padding: 10px 45px;
ul{
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
}
li{
    border: 2px solid #ccc;
    padding: 5px;
    border-radius: 10px;
}
li:hover{
    background-color: black;
    color: #ccc;
    cursor: pointer;
    border: 2px solid black;
}

@media(max-width:650px){
    width: 280px;
}
`