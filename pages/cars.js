import React, { useState } from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import Filter from "../components/Filter";
import { Box, Image, Badge, Link } from "@chakra-ui/react";
import style from "../styles/Cars.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Sidebar from "../components/SideBar";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPHCMS_TOKEN,
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

  const filterCars = (value) => {
    console.log(cars, value);
    let filteredCars = cars.filter((car) => car.tags.includes(value));
    cars = filteredCars;
  };

  return (
    <div>
      <Sidebar />
      {cars ? (
        <div className={style.main}>
          {/* <button cars={() => filterCars("red")}>Big ol button</button> */}
          {cars.map((car, key) => (
            <div key={car.id} className={style.carbox}>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                margin="10vh"
              >
                <Link href={`/car/${car.slug}`}>
                  <div key={key} className={style.image}>
                    <img src={car.image[0].url} />
                  </div>
                </Link>
                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {car.colour} &bull; {car.year}
                    </Box>
                  </Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {car.brand} {car.model}
                  </Box>
                  <Box>
                    R{car.price}
                    <Box as="span" color="gray.600" fontSize="sm"></Box>
                  </Box>
                </Box>
              </Box>
            </div>
          ))}
        </div>
      ) : null}
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
