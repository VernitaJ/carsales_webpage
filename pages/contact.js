import React, { useEffect } from "react";
import Email from "../components/Email";
import styled from "styled-components";

const Contact = () => {
  return (
    <Page>
      <TopSection>
        <Heading>Contact us</Heading>
        <div>Mobile: 076-990-6274</div>
        <div>admin@blueauto.co.za</div>
        <br></br>
        <p>Alternatively, submit a contact request:</p>
      </TopSection>
      <BottomSection>
        <Email />
      </BottomSection>
    </Page>
  );
};

export default Contact;

const Page = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  background: rgb(0, 0, 77); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgb(0, 0, 77),
    rgb(0, 0, 50),
    rgb(0, 0, 77)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgb(0, 0, 77),
    rgb(0, 0, 50),
    rgb(0, 0, 77)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const TopSection = styled.div`
  color: white;
  height: 300px;
  font-weight: bold;
  margin: 0 0 0 200px;
  @media (max-width: 568px) {
    margin: unset;
    margin: 20px auto 30px 30px;
    height: fit-content;
  }
`;
const BottomSection = styled.div`
  @media (max-width: 568px) {
    margin: unset;
    margin-top: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Heading = styled.div`
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 600;
  @media (min-width: 1000px) {
    font-size: 34px;
  }
`;
