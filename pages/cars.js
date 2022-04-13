import React, { useState } from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import { Box, Badge, Link } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Sidebar from "../components/SideBar";
import PopUp from "../components/ContactPopUp";
import Image from "next/image";

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

  setTimeout = () => {
    setShowPopUp(true)
      , 5000
  }

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      {/* <Sidebar> */}
      <Sidebar cars={cars} updateFilter={applyFilter} className="z-10 m-0" />
      {showPopUp ? <PopUp /> : null}
      {filteredCars.length > 0 ? (
        // <div classNameName="car-container">
        <div className="px-0 md:p-6">
          {filteredCars.map((car, key) => (
            <div
              key={car.id}
              className="grid md:w-1/3 md:m-auto relative md:mt-10 grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-9 md:border-8 border-blue-900 bg-gray-100 rounded-xl"
            >
              <div className="grid text-xl rounded-xl p-6 ml-3 pt-16 col-start-1 col-span-1">
                <p className="text-black bold">
                  {car.brand} {car.model}
                </p>
                <p className="text-black">
                  {car.colour} &bull; {car.year}
                </p>

                <br />
                <p className="text-black">R{format(car.price)}</p>
              </div>
              <div className="flex justify-center text-6xl p-6 m-auto col-start-2 col-span-2">
                <Link href={`/car/${car.slug}`}>
                  <Image
                    className="mx-auto"
                    alt="car main image"
                    src={car.image[0].url}
                    layout="intrinsic"
                    width={900}
                    height={600}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="z-50 mr-0 p-40 bg-transparent">
          Unfortunately we don&apos;t have the exact match. Try another search.
        </div>
      )}
    </div>
  );
};

export default Cars;
