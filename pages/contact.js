import React from "react";
import Email from "../components/Email";
import styled from 'styled-components'

const Contact = () => {
  return (
    <div>
      <TopSection>
        <div>     Mobile: 076-990-6274</div>
        <div>pedri@blueauto.co.za</div>
      </TopSection>
      <BottomSection>
        <p>Alternatively, contact us using this form:</p>
        <Email />
      </BottomSection>
    </div >
  )
}

export default Contact;

const TopSection = styled.div`
  margin: 50px;  
  color: white;
  font-weight: bold;
`
const BottomSection = styled.div`
  margin: 50px;
  p {
    color: white;
  }
`