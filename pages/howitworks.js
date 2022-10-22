import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <Page>
      <Container>
        <PageHeading>How it works </PageHeading>
        <div>
          Buying and selling your car through BlueAuto is simple, reliable and
          safe. We&apos;re here to help the Buyer and the Seller.
        </div>
        <Heading>Buying</Heading>
        <div>
          Once you find a car on our website that you&apos;re interested in,
          complete the <b>&apos;check availability&apos;</b> form. You will then
          be contacted by a member of our team to discuss any questions you may
          have, arrange a viewing and test drive with the owner. <br />
          Once you are happy it is the car for you, we do financing applications
          and ensure you get the best deal possible. All payments will go
          through the BlueAuto Secure Payment System enabling delivery on the
          same day. <br />
          Pre-delivery inspections will be done, and extended warranties of up
          to 2 years are available on all purchases.
          <br />
          Interested in payment plans? Ask a member of our team and they can
          tell you all about our finance offers.
        </div>
        <Heading>Selling</Heading>
        <div>
          To advertise your car through BlueAuto, firstly you can complete the
          <b>&apos;Sell your car&apos;</b> form. Following this, one of our team
          will get in contact with you to ensure we have all your details and
          help you get great photos so we can get the right buyer for your car.
          <br />
          Once your car is visible on BlueAuto, our team will manage all
          enquiries, to save you the time and hassle. When we have a potential
          buyer we will arrange a suitable time for viewing the car and arrange
          a test drive. When we have found the right buyer and you&apos;re ready
          for the sale, the car will be collected by one of our team members
          once the full payment has been paid into your bank account using the
          BlueAuto Secure Payment System.
        </div>
        <Heading>Got any other questions?</Heading>
        <div>
          Our team would be more than happy to help.
          <span>
            <Link href="/contact" passHref>
              Contact us.
            </Link>
          </span>
        </div>
      </Container>
    </Page>
  );
};

export default HowItWorks;

const Page = styled.div`
  min-height: 100vh;
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

const Container = styled.div`
  color: rgb(251, 251, 255);
  margin: 0 0 0 200px;
  width: 60%;
  @media (max-width: 568px) {
    margin: unset;
    margin: 20px auto 30px auto;
    height: fit-content;
    width: 90%;
  }
  a {
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
    cursor: pointer;
  }
`;

const Heading = styled.div`
  font-size: 24px;
  margin-top: 40px;
  font-weight: 600;
  @media (min-width: 1000px) {
    font-size: 34px;
  }
`;

const PageHeading = styled.div`
  font-size: 27px;
  margin-bottom: 25px;
  font-weight: 600;
  @media (min-width: 1000px) {
    font-size: 40px;
  }
`;
