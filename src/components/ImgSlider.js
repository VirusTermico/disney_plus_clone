import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'


function ImgSlider() {

    let settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }
  return (
   <Carousel {...settings}>
        <Wrap>
        <img src="/images/slider-badging.jpg" alt=""/>
        </Wrap>
        <Wrap>
        <img src="/images/slider-badging.jpg" alt=""/>
        </Wrap>
        <Wrap>
        <img src="/images/slider-badag.jpg" alt=""/>
        </Wrap>
   </Carousel>
  )
}

const Carousel= styled(Slider)`
margin-top:20px;

ul li button{
    &:before{
        font-size:10px;
        color:rgb(150 158 171);
    }
}
li.slick-active button::before{
    color:white;
}
.slick-list{
    overflow:hidden;
}

button{
    z-index:1;
}


`
const Wrap=styled.div`
cursor:pointer;

img{
    border-radius:4px;
    border:4px solid transparent;
    width:100%;
    height:100%;
    box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0 16px 10px -10px;

    &:hover{
        border:4px solid rgba(249, 249, 249)
    }
}
`

export default ImgSlider