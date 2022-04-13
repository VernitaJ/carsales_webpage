import React, { useEffect, useState } from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Sidebar from "../components/SideBar";
import PopUp from "../components/ContactPopUp";
import Image from "next/image";
import Link from "next/link";

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
    <div style={{ backgroundColor: "black", color: "white" }}>
      {/* <Sidebar> */}
      <Sidebar cars={cars} updateFilter={applyFilter} className="z-10 m-0" />
      {showPopUp ? <div><PopUp /></div> : null}
      {filteredCars.length > 0 ? (
        // <div classNameName="car-container">
        <div className="px-0 md:p-6">
          {filteredCars.map((car, key) => (
            <div
              key={car.id}
              className="grid md:w-6/12 md:m-auto text-white relative md:mt-10 grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-9 md:border-8 border-blue-900 bg-black rounded-xl"
            >
              <div className="grid text-md rounded-xl p-6 ml-3 col-start-1 col-span-2">
                <p>
                  Brand and Model:
                </p>
                <p>
                  Colour:
                </p>
                <p>
                  Year:
                </p>
                <p>Price:</p>
              </div>
              <div className="grid text-xlrounded-xl p-6 ml-3 col-start-3 col-span-1">
                <p>
                  {car.brand} {car.model}
                </p>
                <p>
                  {car.colour}
                </p>
                <p>
                  {car.year}
                </p>
                <p >R{format(car.price)}</p>
              </div>
              <div className="flex justify-center text-6xl p-6 m-auto col-start-4 col-span-3">
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
