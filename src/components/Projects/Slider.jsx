import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "./pics/project1.jpg",
        disc : "Chegg.com is an American education technology company based in Santa Clara, California."
    },
    {
        img : "./pics/project2.jpg",
        disc : "Temu (tee-moo) is an online marketplace that connects consumers with millions of sellers, manufacturers and brands around the world with the mission to empower them to live their best lives."
    },
    {
        img : "./pics/project3.png",
        disc : "CertiK is Web3's leading smart contract auditor and provides a comprehensive suite of tools to secure the industry at scale."
    },
    {
        img : "./pics/project4.png",
        disc : "Makiswap is a automated market maker (AMM) on HECO (Huobi Chain) that offers fast transaction time, cheap gass fees and liquidity for tokens that run on HECO"
    },
    {
        img : "./pics/project5.png",
        disc : "Maxos uses DeFi to improve the global supply of savings and credit"
    },
    {
        img : "./pics/project6.png",
        disc : "RociFi is the on-chain credit scoring and capital-efficient DeFi lending protocol on Polygon that allows borrowers to take fixed-term fixed-rate stablecoin loans with reduced collateral while gives lenders the possibility to earn interest from depositing their assets into lending pools. "
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`