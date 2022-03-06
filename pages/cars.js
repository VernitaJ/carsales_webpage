import React, { useState } from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import Filters from "../components/Filters";
import { Box, Image, Badge, Link } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Sidebar from "../components/SideBar";

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

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      {/* <Sidebar> */}
      <Sidebar cars={cars} updateFilter={applyFilter} class="z-10 m-0" />
      {filteredCars.length > 0 ? (
        // <div className="car-container">
        <div class="px-0 md:p-6">
          {filteredCars.map((car, key) => (
            <div
              key={car.id}
              class="grid md:w-1/2 m-auto relative grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-9 border-2 border-gray-300 mb-4 rounded-xl"
            >
              <div class="grid text-xl rounded-xl p-6 bg-black ml-3 pt-16 col-start-1 col-span-1">
                <p class="text-white bold">
                  {car.brand} {car.model}
                </p>
                <p class="text-white sm:text-red">
                  {car.colour} &bull; {car.year}
                </p>

                <br />
                <p className="text-white">R{car.price}</p>
              </div>
              <div class="flex justify-center text-6xl  p-6 bg-black col-start-2 col-span-2">
                <Link href={`/car/${car.slug}`}>
                  <img class="mx-auto" src={car.image[0].url} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : <div className=" z-50 mr-0 p-40 bg-transparent">Unfortunately we don't have the exact match. Try another search.</div>}
    </div>
  );
};

// export async function getServerSideProps() {
//   console.log("here");
//   let dev = process.env.NODE_ENV !== "production";
//   let { DEV_URL, PROD_URL } = process.env;
//   // request posts from api
//   let response = await fetch("http://localhost:3000/api/cars");
//   // let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/cars`);
//   // extract the data
//   let { data } = await response.json();
//   console.log("data:", data);
//   return {
//     props: {
//       cars: data,
//     },
//   };
// }

export default Cars;
