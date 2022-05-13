import styled from "styled-components";

export const Icon = styled.span`
position: absolute;
right: 10px;
top: 10px;
cursor: pointer;
`

export const Logincss = styled.div`
display: flex;
width: 50vw;
border: 1px solid #ccc;
margin-top: 20px;
height:400px;
.first{
    width: 50%;
    padding-top: 6rem;
    padding-left: 1rem;
    background-color: burlywood;
}
.second{
    width: 50%;
    padding: 42px;
    background: url('background/bac1.jpg');
    form{
        h4{
            color: white;
            margin-left: 8px;
            cursor: pointer;
        }
    }
    h4{
        color: white;
        cursor: pointer;
    }
    div{
        margin: 10px;
    }
    input{
        outline: none;
        margin:10px 0;
        border: none;
        width: 100%;
        padding: 5px 10px;
        border-bottom: 1px solid #ccc;
    }
    button{
        cursor: pointer;
        color: white;
        font-size: 18px;
        letter-spacing: 0.9;
        width: 90%;
        margin-top: 4rem;
        margin-bottom: 4rem;
        margin-left: 11px;
        padding: 3px 7px;
        outline:none;
        border: none;
        margin:none;
        padding: 10px;
        background-color: grey;
    }
}

@media(max-width:650px){
 width   :92vw ;
 .first{
display: none;
 }
 .second{
     width: 100%;
 }
}
`