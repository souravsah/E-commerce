import styled from "styled-components";

export const Singlepagecss = styled.div`
display: flex;
width:100vw;
@media(max-width:650px){
    display: flex;
    flex-direction: column;
}
`
export const Image = styled.div`
width: 60%;
padding: 10px;
div{
    background-color: red;
}
.one{
    grid-area: on;
}
.two{
    grid-area: tw;
}
.three{
    grid-area:th;
}
.four{
    grid-area:fo;
}
.five{
    grid-area:fi;
}
.six{
    grid-area:si;
}

display: grid;
grid-template-areas: 'on tw tw tw'
                    'th tw tw tw'
                    'fo tw tw tw'
                    'fi tw tw tw'
                    'si tw tw tw';
                    gap:5px;
@media(max-width:700px){
    width: 100%;
    display: flex;
align-items: center;
.one{
    display:block;
    width:100%;
    height:350px;
}
.two{
    display:none;
}
.three{
    display:none;
}
.four{
    display:none;
}
.five{
    display:none;
}
.six{
    display:none;
}

}
`
export const Details = styled.div`
width: 40%;
ul{
    li{
        padding: 20px 0;
        list-style: none;
    }
}
@media(max-width:700px){
    width: 100%;
    text-align: center;
align-items: center;
}

`
export const Licss = styled.ul`
display: flex;
padding-top: 10px;
li{
    margin-right: 10px;
h4{
    color: white;
    padding: 10px;
    background-color: grey;
}
h4:hover{
    cursor: pointer;
}
}
@media(max-width:750px){
    display: inline-block;
    align-items: center;
    li{
        h4{
            text-align: center;
        }
}
}

`
export const Size = styled.li`
button{
    width: 80%;
    padding: 10px 0;
    border: none;
    color:white;
    background-color: brown;
}
button:hover{
    padding: 11px 1px;
    cursor: pointer;
}
`
export const Incrementcss = styled.li`
span{
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
}
`