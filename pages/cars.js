import React, { useEffect } from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import fetch from "isomorphic-unfetch";
import { Box, Image, Badge, Link} from "@chakra-ui/react";
import "../styles/Cars.module.css";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization:
       process.env.GRAPHCMS_TOKEN
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
        image { 
          url
        }
        id
      }
    }
  `;
  let data = await graphQLClient.request(query);
  let cars = data.cars;
  console.log(cars.image);
  return { props: { cars } };
};

const Cars = ({ cars }) => {
  return (
    <div >
        {cars ? (
          <div className="main">
            {cars.map((car, key) => (
              <div key={car.id}>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  margin="10vh"
                >
            {car.image.map((img, key) => (
              <div key={key} className="slider">
              <Link href="#slide-1" scroll={"false"}>
                <p>1</p>
              </Link>
             </div>
            ))}
                  
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
