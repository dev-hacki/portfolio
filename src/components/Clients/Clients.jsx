import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "Andres Felipe",
        position : "CEO | Co-founder",
        img_url : "./pics/client1.jpg",
        stars : 5,
        disc : `Your expertise and dedication were crucial to the success of the Makiswap DeFi project. Thank you for your hard work!`
    },
    {
        name : "William Rodriguez",
        position : "CTO | Marketing Lead",
        img_url : "./pics/client2.png",
        stars : 4,
        disc : `Thank you for your professional support and guidance on our marketing project. Your expertise was invaluable. We appreciate your efforts.`
    },
    {
        name : "Emily Johnson",
        position : "CEO",
        img_url : "./pics/client3.png",
        stars : 5,
        disc : `Thank you for your kind and warm help on our project. Your support was invaluable and greatly appreciated. Looking forward to working with you again.`
    },
    {
        name : "Abigail Davis",
        position : "UX/UI Designer",
        img_url : "./pics/client4.png",
        stars : 4,
        disc : `Thank you for your kind and valuable support on our project. Your expertise was instrumental. Looking forward to working with you again.`
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <span className="green">testimonials</span>
            <h1>what clients say</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`