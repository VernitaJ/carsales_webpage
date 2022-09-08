import React, { useEffect } from "react"
import Email from "../components/Email"
import styled from 'styled-components'

const Contact = () => {
  return (
    <div>
      <TopSection>
        <div>Mobile: 076-990-6274</div>
        <div>pedri@blueauto.co.za</div><br></br>
        <p>Alternatively, contact us using this form:</p>
      </TopSection>
      <BottomSection>
        <Email />
      </BottomSection>
    </div >
  )
}

export default Contact;

const TopSection = styled.div`
  margin: 50px 0 0 100px;  
  color: white;
  font-weight: bold;
`
const BottomSection = styled.div`
  margin: 50px;
  p {
    color: white;
  }
`

const Heading = styled.div`
  font-size: 18px;
  color: white;
  font-weight: 400;
  margin-left: 50px;
`