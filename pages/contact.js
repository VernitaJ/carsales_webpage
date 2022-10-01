import React, { useEffect } from "react";
import Email from "../components/Email";
import styled from "styled-components";

const Contact = () => {
  return (
    <Page>
      <TopSection>
        <div>Mobile: 076-990-6274</div>
        <div>pedri@blueauto.co.za</div>
        <br></br>
        <p>Alternatively, contact us using this form:</p>
      </TopSection>
      <BottomSection>
        <Email />
      </BottomSection>
    </Page>
  );
};

export default Contact;

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  top: 0;
  padding: 20px;
  min-height: 100vh - 100px;
  background-size: 100% 100%;
  background-position: 0px 0px;
  // background-image: linear-gradient(90deg, #070E4EFF 0%, rgb(0,0, 77) 40%, #FFFFFFFF 46%, #FFF 97%);
  background-image: url("/bg.jpg"), linear-gradient(#070e4eff, #fff);
`;

const TopSection = styled.div`
  color: white;
  margin: 60px 0 0 100px;
  font-weight: bold;
`;
const BottomSection = styled.div`
  margin: 50px;
  p {
    color: white;
  }
`;

const Heading = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-left: 50px;
`;
