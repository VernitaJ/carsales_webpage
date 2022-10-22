import React, { useEffect, useState } from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import Sidebar from "../components/SideBar";
import styled from "styled-components";
import Link from "next/link";
import Transmission from "../public/CarGear.svg";
import MileageIcon from "../public/CarMileage.svg";
import Door from "../public/CarDoor.svg";
import Seats from "../public/CarSeat.svg";
import { useRouter } from "next/router";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//import { Carousel } from "react-responsive-carousel";

import CarEmail from "../components/CarEmail";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    query {
      cars {
        brand
        model
        year
        price
        colour
        tags
        location
        slug
        image {
          url
        }
        id
      }
    }
  `;
  let data = await graphQLClient.request(query);
  let cars = data.cars;
  return { props: { cars } };
};

const Cars = ({ cars }) => {
  const { router, params } = useRouter();
  const [showPopUp, setShowPopUp] = useState(false);
  const [price, setPrice] = useState({ min: 0, max: 1000000 });
  const [filteredCars, setFilteredCars] = useState(cars);
  const [selectedCar, setSelectedCar] = useState(null);

  const applyFilter = (filtered) => {
    setFilteredCars(filtered);
  };

  const filterCars = (value) => {
    console.log(cars, value);
    let filtered = cars.filter((car) => car.tags.includes(value));
    setFilteredCars(filtered);
  };

  const format = (num) => {
    let numArray = num.toString().split("").reverse();
    for (let i = 3; i < numArray.length; i += 4) {
      numArray.splice(i, 0, ",");
    }
    return numArray.reverse().join("");
  };

  const goToContact = (car) => {
    localStorage.setItem("current_car", JSON.stringify(car));
    console.log(car);
    setSelectedCar(car);
  };

  useEffect(() => {
    setTimeout = () => {
      setShowPopUp(true), 3000;
    };
  }, []);

  const removeCar = () => {
    setSelectedCar(null);
  };

  return (
    <CarPage>
      <Sidebar cars={cars} updateFilter={applyFilter} className="z-10" />

      <InfoContainer>
        <Heading>
          <span>
            <Image src="/favicon.png" width={70} height={70} />
          </span>
          <p>It&apos;s all about you.</p>
          <br />
        </Heading>
        <List>
          <ListItem>
            Predelivery inspection provided before the delivery of your vehicle.
          </ListItem>
          <ListItem>
            Financing applications are sent to all our affiliate banks, so you
            get the best deal possible.
          </ListItem>
          <ListItem>AA roadworthy certificate included in purchase.</ListItem>
          <ListItem>
            Extended warranties of up to 2 years available on all vehicles.
          </ListItem>
        </List>
      </InfoContainer>
      {filteredCars.length > 0 ? (
        <CarsContainer>
          {filteredCars.map((car, key) => (
            <>
              {selectedCar == car ? (
                <Modal>
                  <CarEmail removeCar={removeCar} />
                </Modal>
              ) : null}

              {/* onClick={() => router.push(`/car/${car.slug}`)} */}

              <Link href={`/car/${car.slug}`}>
                <CarBox key={car.id} className="">
                  <TopSection>
                    <CarImage>
                      <Carousel dynamicHeight={false} showThumbs={false}>
                        {car.image.map((img, key) => (
                          <div key={key}>
                            <img
                              src={img.url}
                              alt="carousel image"
                              style={{ width: "300px", height: "auto" }}
                            />
                          </div>
                        ))}
                      </Carousel>
                    </CarImage>
                    <CarInfo>
                      <CarHeading>
                        {car.brand}&nbsp;
                        {car.model}
                      </CarHeading>
                      <p>{car.year}</p>
                      <Price>R{format(car.price)}</Price>
                      <Text>{car.colour}</Text>
                    </CarInfo>
                    <InterestButton onClick={() => goToContact(car)}>
                      Send interest
                    </InterestButton>
                    {}
                  </TopSection>
                  <BottomTextInfo>
                    <Transmission />
                    Manual
                    <Door />
                    <p>5 door</p>
                    <Seats />
                    <p>5 seats</p>
                    <Mileage />
                    <p>10,000km</p>
                  </BottomTextInfo>
                </CarBox>
              </Link>
            </>
          ))}
        </CarsContainer>
      ) : (
        <div className="z-50 mr-0 p-40 bg-transparent">
          Unfortunately we don&apos;t have the exact match. Try another search.
        </div>
      )}
    </CarPage>
  );
};

export default Cars;

const CarPage = styled.div`
  min-height: 100vh;
  top: 0;
  padding: 20px;
  min-height: 100vh - 100px;
  background-size: 100% 100%;
  background-position: 0px 0px;
  // background-image: linear-gradient(
  //   90deg,
  //   #070e4eff 0%,
  //   rgb(0, 0, 77) 20%,
  //   #ffffffff 21%,
  //   #fff 97%
  // );
  @media (min-width: 768px) {
    position: relative;
    text-align: center;
  }
`;

const CarsContainer = styled.div`
  width: 40%;
  margin-left: 25%;
  @media (max-width: 1200px) {
    width: 50%;
    margin-top: 15px;
  }
  @media (max-width: 800px) {
    width: 80%;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CarBox = styled.div`
  margin-top: 5%;
  webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  width: 90%;
  color: black;
  border-radius: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  grid-template-columns: 1fr, 2fr;
  @media (max-width: 800px) {
    background-color: white;
    width: 90%;
  }
`;

const TopSection = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0px;
    p {
      line-height: 20px;
      margin: 0;
      padding: 0;
    }
    flex-wrap: wrap;
    margin: 5px;
  }
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    gap: 10px;
    align-items: center;
  }
`;

const CarImage = styled.div`
  width: 100%;
  margin: 0px 20px 5px 0px;
`;

const CarHeading = styled.p`
  margin: 10px 5px 5px 0;
  font-size: 19px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 18px;
`;

const Price = styled.p`
  font-size: 17px;
  color: rgb(0, 0, 40);
  font-weight: bold;
`;

const Year = styled.p`
  font-size: 15px;
`;

const Mileage = styled.p`
  font-size: 15px;
`;

const InterestButton = styled.button`
  border-radius: 5px;
  width: fit-content;
  padding: 2px;
  border: 1px solid gray;
  margin-left: auto;
  margin-right: 20px;
  font-size: 12px;
  margin-bottom: 15px;
  :hover {
    box-shadow: 0.5px 0.5px 0px 0.5px rgba(0, 20, 40, 0.5);
  }
`;

const Heading = styled.div`
  gap: 10px;
  align-items: flex-end;
  display: flex;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  p {
    margin-bottom: 12px;
  }
`;

const BottomTextInfo = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 10%;
  svg {
    margin-left: 20px;
    margin-right: 5px;
    height: 25px;
    max-width: 25px;
  }
  @media (max-width: 768px) {
    gap: ;
  }
  margin: auto;
  font-size: 14px;
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  position: absolute;
  right: 80px;
  position: fixed;
  font-size: 13px;
  font-family: Helvetica;
  color: rgb(10, 0, 80);
  width: 20%;
  border: 1px solid white;
  border-radius: 5px;
  @media (max-width: 800px) {
    width: 90%;
    background-color: rgb(255, 255, 255, 0.8);
    position: relative;
    padding: 10px;
    right: 0;
  }
`;

const List = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const ListItem = styled.li``;

const Modal = styled.div`
  position: absolute;
  right: 200px;
  padding: 25px 30px;
  height: 300px;
  background-color: rgba(0, 20, 77);
  z-index: 1000;
  border-radius: 5px;
  color: white; ;
`;
