import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import { LinkBox, LinkContainer } from "../styles/index.styled";

export default function Landing() {
  const router = useRouter();
  return (
    <>
      <main>
        <Head>
          <title>Blue Auto</title>
          <meta name="description" content="It's all about you" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <TopSection>
          <Background>
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-40 bg-black"
            ></span>
          </Background>
          <div
            style={{
              font: "sans",
              display: "flex",
              color: "white",
              zIndex: "20",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "800px",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <Image
              src="/favicon_white.png"
              width={70}
              height={70}
              style={{
                filter: "drop-shadow(rgb(190,190,200) 1px 1px 2px)",
                position: "relative",
              }}
            />
            {/* <InfoParagraph>
              Blue Auto is the only dealership where the seller AND the buyer get the best prices.
            </InfoParagraph> */}
            {/* <InfoParagraph>Here at <b>Blue Auto</b> we look after both buyer and seller - so that the benefit goes to the people that deserve it, instead of dealerships.</InfoParagraph> */}
            <Heading>
              <p>
                At <b>Blue Auto</b> the seller gets more, and the buyer pays
                less.
              </p>
              <p>With us - it&apos;s all about you!</p>
            </Heading>
          </div>
        </TopSection>

        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
              className="text-blue-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <section className="pb-20 bg-lightBlue-900 -mt-5">
          <LinkContainer>
            <LinkBox onClick={() => router.push("/cars")} $color="darkBlue">
              <p className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-500">
                <i className="text-white fas fa-award"></i>
              </p>
              <h4>Buying</h4>
              <p>
                Find your new car at the best price - with financing available.
              </p>
            </LinkBox>

            <LinkBox onClick={() => router.push("/upload")} $color="darkGreen">
              <p className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-500">
                <i className="text-white fas fa-retweet"></i>
              </p>
              <h4>Selling</h4>
              <p>Benefit the most from your vehicle. We'll sell it for you.</p>
            </LinkBox>
          </LinkContainer>

          {/* <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div
                  onClick={() => router.push("/financing")}
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                >
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-3xl font-semibold">Financing</h6>
                    <p className="text-xl mt-2 mb-4 text-blueGray-500">
                      With support by all major South African banks, you&apos;ll
                      be sure to drive away with a smile.
                    </p>
                  </div>
                </div>
              </div> */}

          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 ml-10">
              <div className="text-blueGray-500 ml-5 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <InfoHeading>
                At <b>Blue Auto, </b>we like keeping it simple
              </InfoHeading>
              <InfoParagraph className="text-lg leading-relaxed mt-4 mb-4">
                Once you find the vehicle you love, we&apos;ll arrange the rest.
                Within a week your new car will be in your driveway.
              </InfoParagraph>
              <InfoParagraph className="text-lg leading-relaxed mt-0 mb-4 ">
                Easy. Affordable. Simple.
              </InfoParagraph>
              <InfoParagraph className="text-xl font-semibold text-white mt-8">
                <Link href="/cars">
                  Check out the cars we have on offer here.
                </Link>
              </InfoParagraph>
            </div>

            <div className="w-full lg:w-4/12 md:w-6/12 px-4 lg:mr-auto ml-auto mb-12">
              <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blue-900">
                <img
                  style={{ maxWidth: "300px" }}
                  alt="..."
                  src="/car.png"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blue-900 fill-current"
                    ></polygon>
                  </svg>
                  <BlockHeading>Advice and assistance</BlockHeading>
                  <AdviceParagraph>
                    From information on car brands and models, to knowledge on
                    financing and affordability -&nbsp;
                    <b>Blue Auto</b> is here to help you!{" "}
                    <Link href="/contact">Contact us today.</Link>
                  </AdviceParagraph>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="car"
                  className="max-w-full rounded-lg shadow-lg"
                  src="/car2.png"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12 text-white">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Personal service</h3>
                  <p className="mt-4 text-lg leading-relaxed ">
                    At Blue Auto we provide personal service every step of the
                    way:
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-200 mr-3">
                            <i className="fa fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4>Free valuations</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-200 mr-3">
                            <i className="fa fa-cogs"></i>
                          </span>
                        </div>
                        <div>
                          <h4>Predelivery inspections</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4>Financing applications</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-100">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-blueGray-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-24">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 mt-10">
                <FinancingHeading>
                  Blue Auto Financing partners
                </FinancingHeading>
                <p className="text-xl mb-10 text-blueGray-500">
                  Through our financing options with these major banks,
                  we&apos;ll find the best deal for you.
                </p>
              </div>
            </div>

            <FinancingImages>
              <div className="lg:w-3/12 px-4 text-center">
                <Image src="/mfc.png" width={160} height={60}></Image>
              </div>

              <div className="lg:w-3/12 mx-4 text-center -m-2">
                <Image src="/bmw.png" width={150} height={75} />
              </div>

              <div className="lg:w-3/12 px-4 text-center -m-3">
                <Image src="/wesbanklogo.png" width={190} height={65} />
              </div>

              <div className="lg:w-3/12 px-4 text-center">
                <Image src="/absa.png" width={70} height={70} />
              </div>

              <div className="lg:w-3/12 px-4 text-center -m-3">
                <Image src="/standardbank.png" width={100} height={140} />
              </div>
            </FinancingImages>
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block h-110-px top-94-px"
            >
              <polygon
                points="0,95 593,95 583,65"
                style={{ fill: "rgb(0,0,77)" }}
              ></polygon>
            </svg>
          </div>
        </section>
      </main>
    </>
  );
}

export const FinancingHeading = styled.h3`
  margin-bottom: 30px;
  color: rgb(0, 0, 77);
  font-size: 35px;
  font-weight: bold;
  filter: drop-shadow(rgb(190, 190, 255) 0px 1px 1px);
`;

export const FinancingImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
  gap: 50px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5px;
  font-size: 25px;
  padding: 10px 20px;
  font-weight: bold;
`;

export const InfoParagraph = styled.h2`
  align-content: center;
  max-width: 800px;
  margin: 20px;
  font-size: 16px;
  color: white; ;
`;

export const Background = styled.div`
  position: absolute;
  background-position: center;
  background-size: cover;
  top: 0;
  width: 100vw;
  height: 100%;
  background-image: url("https://res.cloudinary.com/gothenburg-university/image/upload/v1645822110/car_ohug26.jpg");
`;

export const TopSection = styled.section`
  position: relative; 
  padding-top: 16px;
  padding-bottom: 32px; 
  display: flex; 
  align-content: center; 
  justify-content: center; 
  min-height: 50vh; s
`;

export const InfoHeading = styled.h3`
  font-size: 18px;
  margin-left: 20px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
`;

export const BlockHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
`;

export const AdviceParagraph = styled.p`
  font-size: 15px;
  font-weight: 100;
  color: white;
  font-size: 18px;
`;
