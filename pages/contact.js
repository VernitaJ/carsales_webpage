import React, { useEffect } from "react"
import Email from "../components/Email"
import styled from 'styled-components'
import { useRouter } from "next/router"

const Contact = () => {
  const router = useRouter();
  const car = router.query; // <-- terminalPayload sent in query parameter
  const data = JSON.parse(localStorage.getItem("current_car"))

  return (
    <div>
      {!car ? <TopSection>
        <div>Mobile: 076-990-6274</div>
        <div>pedri@blueauto.co.za</div><br></br>
        <p>Alternatively, contact us using this form:</p>
      </TopSection>
        : <TopSection>
          <Heading>We&apos;ll contact you with more details for this <b>{data.brand} {data.model}</b></Heading>
        </TopSection>}
      <BottomSection>
        <Email car={data ?? data} />
      </BottomSection>
    </div >
  )
}

export default Contact;

const TopSection = styled.div`
  margin-top: 50px;  
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