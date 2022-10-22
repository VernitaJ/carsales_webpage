import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Container className="relative pt-30 pb-0 z-8 m-auto bottom-0 w-full">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 "
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className=" fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto pl-10 px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6 mt-10">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-100 hover:text-white font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="text-blueGray-100 hover:text-white font-semibold block pb-6 text-sm">
                      <Link
                        className="text-blueGray-100 hover:text-white font-semibold block pb-6 text-sm"
                        href="/cars"
                      >
                        Cars
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-blueGray-100 hover:text-white font-semibold block pb-2 text-sm"
                        href="/howitworks"
                      >
                        The Process
                      </Link>
                    </li>
                    <li>
                      <a className="text-blueGray-100 hover:text-white font-semibold block pb-2 text-sm">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InfoText>
          <p className="text-white ml-5 pb-5">
            Blue Auto, registered in 2021, is a small business located in
            Pretoria South Africa.
          </p>
          <p className="text-white mr-5 pb-5">
            South Africa - Registration number: 123US2U3TS
          </p>
        </InfoText>
      </Container>
    </>
  );
}

const Container = styled.footer`
  color: white;
  background-color: rgb(30 58 138);
  polygon {
    color: rgb(30 58 138);
    border-color: rgb(30 58 138);
  }
`;

const InfoText = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 568px) {
    flex-direction: column;
    p {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 14px;
    }
  }
`;
