import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    align-self: center;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      // markers:true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>

      <Container>
        <Box>
          <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS BOARDING PASS?">
            Boarding pass is a collection of 5555 characters travelling around the solana blockchain
            with the purpose of bringing web3 experience in real life shopping.
          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="WHY SHOULD I CARE?">
            We aim to build an IRL store brand that is based on web3 to give you the best 
            day to day shopping experiences.
          </Accordion>
          <Accordion ScrollTrigger={ScrollTrigger} title="WHAT DO I GAIN BY MINTING THE NFT/ INVESTING ON THE PROJECT?">
            By minting the boarding pass Nft, you get to have access to the following:
            <ul style={{ margin: '10px 0 0 15px' }}>
              <li>Exclusive alpha calls</li>
              <li>Job opportunities</li>
              <li>Holder rewards (annual revenue allocation) to holders</li>
              <li>Discounted prices on purchases made on the store and deliveries</li>
              <li>Holders can list and sell their products an 
                  goods on the e-commerce store free of charge. 
              </li>
            </ul>
          </Accordion>
        </Box>
        <Box>
          <Accordion ScrollTrigger={ScrollTrigger} title="DO BOARDING PASS HAVE A UTILITY TOKEN?">
            Boarding pass will have a native utility token that will be used to make purchases across 
            the stores and still be a token that can be held and traded on exchanges just like any other cryptocurrency.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="IS THERE A WHITELIST?"
          >
            There will be a whitelisting system that requires you apply or complete simple tasks (stay tuned in
            the communities for more info on this).
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="IS THE TEAM DOXXED?"
          >
            Yes!... Boarding pass have a full doxxed team which can be seen on the website through the link below.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
