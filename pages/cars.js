import React, { useEffect, useState } from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Sidebar from "../components/SideBar";
import styled from "styled-components";
import Transmission from "../public/CarGear.svg";
import Mileage from "../public/CarMileage.svg";
import Door from "../public/CarDoor.svg";
import Seats from "../public/CarSeat.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import { InfoHeading } from ".";
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
  const router = useRouter();
  const [showPopUp, setShowPopUp] = useState(false);
  const [colour, setColour] = useState("");
  const [brand, setBrand] = useState("");
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
          <ListItem>Predelivery inspection provided before delivery.</ListItem>
          <ListItem>
            Financing applications to all our affiliate banks, so you get the
            best deal possible.
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

                  <Link href={`/car/${car.slug}`}>
                    <CarInfo>
                      <CarHeading>
                        {car.brand}&nbsp;
                        {car.model}
                      </CarHeading>
                      <p>{car.year}</p>
                      <Price>R{format(car.price)}</Price>
                      <Text>{car.location}</Text>

                      <BottomTextInfo>
                        <div>
                          <Transmission />
                          Manual
                        </div>
                        <div>
                          <Door />
                          <p>5 door</p>
                        </div>
                        <div>
                          <Seats />
                          <p>5 seats</p>
                        </div>
                        <div>
                          <Mileage />
                          <p>10,000km</p>
                        </div>
                      </BottomTextInfo>
                    </CarInfo>
                  </Link>
                </TopSection>
              </CarBox>
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
  top: 0;
  padding: 20px;
  min-height: 100vh + 400px;
  margin-bottom: 200px;
`;

const CarsContainer = styled.div`
  width: 45%;
  margin-left: 25%;
  @media (max-width: 800px) {
    width: 90%;
    margin-left: 0;
    margin-top: 15px;
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

const CarBox = styled.div`
  background-color: rgb(240, 240, 240);
  margin-top: 5%;
  border: 1px solid rgb(200, 200, 255);
  color: black;
  border-radius: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  grid-template-columns: 1fr, 2fr;
  webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;

const TopSection = styled.div`
  position: relative;
  display: flex;
  gap: 30px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CarImage = styled.div`
  width: 300px;
  margin: 0px 20px 30px 0px;
`;

const CarHeading = styled.p`
  margin: 20px 0;
  font-size: 19px;
  font-weight: bold;
  @media (max-width: 900px) {
    margin: 0;
  }
`;

const Text = styled.p`
  font-size: 18px;
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

const InterestButton = styled.button`
  position: absolute;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid darkblue;
  right: 30px;
  bottom: 100px;
  :hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 20, 100, 0.9);
    border: 1px solid lightblue;
  }
`;
const BottomTextInfo = styled.span`
  position: relative;
  margin-top: 10px;
  align-items: center;
  div {
    justify-content: center;
  }
  svg {
    height: 25px;
    max-width: 25px;
  }
  gap: 20px;
  max-width: 400px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 14px;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  position: absolute;
  right: 80px;
  position: fixed;
  font-size: 16px;
  font-family: Helvetica;
  color: rgb(10, 0, 80);
  width: 20%;
  border: 1px solid white;
  border-radius: 5px;
  @media (max-width: 900px) {
    width: 90%;
    background-color: rgb(255, 255, 255, 0.8);
    position: relative;
    padding: 10px;
    right: 0;
  }
  @media (max-width: 568px) {
    display: none;
  }
`;

const List = styled.ol`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const ListItem = styled.li`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Modal = styled.div`
  position: absolute;
  right: 200px;
  padding: 25px 30px;
  height: 300px;
  background-color: rgba(0, 20, 77);
  z-index: 1000;
  border-radius: 5px;
  color: white;
`;
