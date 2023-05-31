import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Lead Full Stack Web3 Engineer"}
            disc={`As a Lead Full Stack Web3 Engineer, I can design and develop decentralized applications using blockchain technology. Also I can architect robust and scalable systems, write efficient code, implement smart contracts, integrate APIs, and ensure high security and performance.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Professional AI Data Scientist"}
            disc={`As a Professional AI Data Scientist, I can analyze and interpret complex data using machine learning algorithms and statistical models. Also I can develop predictive models, optimize algorithms, and provide data-driven insights to drive business decisions.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Proficient Software Consultant"}
            disc={`As a Proficient Software Consultant, I can provide expert advice and guidance on software development best practices, project management, and technology solutions. Also I can assess business needs, identify opportunities for improvement, and deliver effective software solutions.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
