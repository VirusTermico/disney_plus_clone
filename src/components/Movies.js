import React from 'react'
import styled from 'styled-components'
function Movies() {
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
            <Wrap>
                <img src="https://3.bp.blogspot.com/-GbxaodbHAuM/WTAUXQWXpsI/AAAAAAAAWnY/uX7rWAKfE4IFo1SH81gM9IYkV4BNJeTKQCEw/s1600/Infinito%2B05.jpg"/>
            </Wrap>
            <Wrap>
                <img src="https://3.bp.blogspot.com/-GbxaodbHAuM/WTAUXQWXpsI/AAAAAAAAWnY/uX7rWAKfE4IFo1SH81gM9IYkV4BNJeTKQCEw/s1600/Infinito%2B05.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/infinito.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/enigma.jpg" alt=""/>
            </Wrap>
        </Content>
    </Container>
  )
}

const Container=styled.div`

`

const Content=styled.div`
display:grid;
grid-gap:25px;
grid-template-columns: repeat(4, minmax(0,1fr))

`

const Wrap=styled.div`
border-radius:10px;
overflow:hidden;
border: 3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0/72%) 0 16px 10px -10px;
img{
  width:100%;
  height:100%;
  object-fit:cover;
}

&:hover{
  box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px,
  rgb(0 0 0/72%) 0 16px 10px -10px;
  transform:scale(1.05); 
  border: 3px solid rgba(249,249,249,0.8);
}
`
export default Movies