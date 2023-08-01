import React from 'react'
import styled from 'styled-components'
import {Link,useHistory} from 'react-router-dom'
function Viewers() {
const history=useHistory()



  return (
    <Container>
        <Wrap onClick={()=>history.push("/detail")}>
            <img src="/images/viewers-disney.png" />
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png"/>
        </Wrap>
    </Container>
  )
}

const Container=styled.div`
margin-top:30px;
padding: 30px 0 26px; 
display:grid;
grid-gap:25px;
grid-template-columns: repeat(5, minmax(0, 1fr))
`

const Wrap=styled.div`
border: 3px solid rgba(249, 249, 249, 0.1);
cursor:pointer;
border-radius:10px;
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0/73%) 0 16px 10px -10px;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}
&:hover{
    box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px,
    rgb(0 0 0/72%) 0 30px 22px -10px;

    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    transfrom:scale(1.05);
    border-color:rgba(249,249,249,0.8);
}
`
export default Viewers