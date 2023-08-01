import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
            <img src="https://br.web.img3.acsta.net/r_654_368/newsv7/18/08/08/23/19/0168035.jpg"/>
        </Background>
        <ImgTitle>
          <img src="/images/logo.svg"/>
        </ImgTitle>

        <Controls>
            <PlayButton>
            <img src="/images/play-icon-black.png"/>
            <span>Play</span>
            </PlayButton>
            <TrailerButton>
            <img src="/images/play-icon-white.png"/>
            <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
            <img src="/images/group-icon.png"/>
            </GroupWatchButton>
        </Controls>
        <SubTitle>
          2018 * 7m * Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
            John Nash was a brilhiant young mathematician which many of the game teory  enhiritare
        </Description>
    </Container>
  )
}

const Container=styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position:relative;
overflow-x:hidden;

`

const Background=styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.8;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}

`
const ImgTitle=styled.div`
   height:30vh;
   min-height:170px;
   width:35vw;
   min-width:200px;

   img{
    width:100%;
    height:100%;
    object-fit:contain;
   }
`

const Controls=styled.div`
display:flex;
align-items:center;
`
const PlayButton=styled.button`
border-radius:4px;
padding:0 24px;
font-size:15px;
display:flex;
align-items:center;
height:56px;
border:none;
margin-right:22px;
letter-spacing:1.8px;
background-color:rgba(249,249,249);
cursor:pointer;

&:hover{
    background-color:rgba(198,198,198);

}
`
const TrailerButton=styled(PlayButton)`
background-color:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
text-transform:uppercase;

`
const AddButton=styled.button`
margin-right:16px;
width:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
border:2px solid white;
background-color:rgba(0,0,0,0.6);
cursor:pointer;
span{
    font-size:30px;
    color:white;
}
`
const GroupWatchButton=styled(AddButton)`

background:rgb(0,0,0);`

const SubTitle=styled.div`
color:rgb(249,249,249);
min-height:20px;
margin-top:26px;
font-size:15px;
`

const Description=styled.div`
color:rgb(249,249,249);
line-height:1.4;
margin-top:16px;
font-size:20px;`

export default Detail