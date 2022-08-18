import React, { useEffect, useState } from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Sidebar from "../components/SideBar";
import PopUp from "../components/ContactPopUp";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Transmission from '../public/CarGear.svg'
import Mileage from "../public/CarMileage.svg"
import Door from "../public/CarDoor.svg"
import Seats from "../public/CarSeat.svg"

import { Carousel } from "react-responsive-carousel";

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
  const [showPopUp, setShowPopUp] = useState(false);
  const [colour, setColour] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState({ min: 0, max: 1000000 });
  const [filteredCars, setFilteredCars] = useState(cars);

  const applyFilter = (filtered) => {
    setFilteredCars(filtered);
  };

  const filterCars = (value) => {
    console.log(cars, value);
    let filtered = cars.filter((car) => car.tags.includes(value));
    setFilteredCars(filtered);
  };

  const format = (num) => {
    let numArray = num.toString().split('').reverse();
    for (let i = 3; i < numArray.length; i += 4) {
      numArray.splice(i, 0, ',');
    }
    return numArray.reverse().join("");
  }

  useEffect(() => {
    setTimeout = () => {
      setShowPopUp(true)
        , 3000
    }
  }, [])


  return (
    <CarPage>
      {/* <Sidebar> */}
      <Sidebar cars={cars} updateFilter={applyFilter} className="z-10 m-0" />
      {showPopUp ? <div><PopUp /></div> : null}

      {filteredCars.length > 0 ? (
        <CarsContainer>
          {
            filteredCars.map((car, key) => (
              <CarBox
                key={car.id}
                className=""
              >
                <TopSection>
                <CarImage >
                  <Carousel dynamicHeight={false} showThumbs={false}>
              {car.image.map((img, key) => (
                <div key={key} >
                  <img
                    src={img.url} alt="carousel image" style={{width:'300px', height: 'auto'}}/>
                </div>
              ))}
            </Carousel>
                </CarImage>
                <CarInfo>
                  <CarHeading>
                    {car.brand}&nbsp;
                    {car.model}
                  </CarHeading>
                  <p>
                    {car.year}
                  </p>
                  <Price>R{format(car.price)}</Price>
                  <Text>
                    {car.colour}
                  </Text>
                </CarInfo>
                <InterestButton>
                  Check Availability
                </InterestButton>
                </TopSection>
                <BottomTextInfo>
                  <Transmission/>
                  Manual
                  <Door /><p>5 door</p>
                  <Seats /><p>5 seats</p>
                  <Mileage /><p>10,000km</p>
                </BottomTextInfo>
              </CarBox>
            ))}
        </CarsContainer>) : (
        <div className="z-50 mr-0 p-40 bg-transparent">
          Unfortunately we don&apos;t have the exact match. Try another search.
        </div>
      )
      }
    </CarPage>
  );
};

export default Cars;

const CarPage = styled.div`
top: 0;
padding: 20px;
min-height: 100vh - 100px;
background-color: white;
`

const CarsContainer = styled.div`
width: 50%;
margin-left: 25%;
`

const CarBox = styled.div`
margin-top: 5%;
border: 1px solid darkblue;
color: black;
border-radius: 10px;
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
grid-template-columns: 1fr, 2fr;
`
const TopSection = styled.div`
position: relative;
display: flex;
gap: 30px;
`

const CarInfo = styled.div`
display: flex;
flex-direction: column;
`

const CarImage = styled.div`
  width: 300px;
  margin: 0px 20px 30px 0px;
`

const CarHeading = styled.p`
margin: 20px 0;
font-size: 19px;
font-weight: bold;
`

const Text = styled.p`
font-size: 18px;
`

const Price = styled.p`
  font-size: 22px;
  font-weight: bold;
`

const InterestButton = styled.button`
position: absolute;
padding: 8px;
border-radius: 5px;
  border: 1px solid darkblue;
  right: 30px;
  bottom: 100px;
  :hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 20, 100, .9);
    border:1px solid lightblue;
  }
`
const BottomTextInfo = styled.p`
  position: relative;
  svg {
    margin-left: 20px;
    margin-right: 5px;
    height: 25px;
    max-width: 25px;
  }
  width: 80%;
  display: flex;
  align-items: center;
  font-size: 14px;
  left: 20px;
  margin-bottom: 20px;
`