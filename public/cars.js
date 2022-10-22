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
    console.log("made it");
    setSelectedCar(null);
  };

  return (
    <CarPage>
      <Sidebar cars={cars} updateFilter={applyFilter} className="z-10" />

      <InfoContainer>
        <InfoHeading>
          The <b>Blue Auto</b> promise:
        </InfoHeading>
        <List>
          <ListItem>
            1. Financing applications are sent to all our affiliate banks, so
            you get the best deal possible.
          </ListItem>
          <ListItem>
            2. Predelivery inspection guaranteed, with a complimentary service,
            if required.
          </ListItem>
          <ListItem>
            3. AA roadworthy certificate included in purchase.
          </ListItem>
          <ListItem>
            4. Extended warranties of up to 2 years available on all vehicles.
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
              <Link
                href="/car/${car.slug}"
                onClick={() => router.push(`/car/${car.slug}`)}
              >
                <CarBox key={car.id} className="">
                  <TopSection>
                    <CarImage>
                      <Carousel dynamicHeight={false} showThumbs={false}>
                        {car.image.map((img, key) => (
                          <div key={key}>
                            <img
                              src={img.url}
                              alt="carousel image of car"
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
                  </TopSection>
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
  top: 0;
  padding: 20px;
  min-height: 100vh - 100px;
`;

const CarsContainer = styled.div`
  width: 50%;
  margin-left: 25%;
  @media (max-width: 800px) {
    width: 90%;
    margin-left: 0;
    margin-top: 15px;
  }
`;

const CarBox = styled.div`
  background-color: rgb(240, 240, 240);
  margin-top: 5%;
  border: 1px solid rgb(230, 230, 255);
  color: black;
  border-radius: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  grid-template-columns: 1fr, 2fr;
`;

const TopSection = styled.div`
  position: relative;
  display: flex;
  display-direction: column;
  gap: 30px;
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CarImage = styled.div`
  width: 300px;
  margin: 0px 20px 30px 0px;
`;

const CarHeading = styled.p`
  margin: 20px 0;
  font-size: 19px;
  font-weight: bold;
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
  padding: 20px;
  color: white;
  width: 700px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: rgb(10, 0, 80);
  margin-left: 25%;
  @media (max-width: 800px) {
    width: 90%;
    margin-left: 0;
    margin-top: 15px;
  }
`;

const List = styled.ol`
  display: flex;
  justify-content: space-around;
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
  color: white;
`;
