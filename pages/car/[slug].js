import { gql, GraphQLClient } from "graphql-request";
import { Box, Image, Badge, Link } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import style from "../../styles/Cars.module.css";

export const getServerSideProps = async (pageContext) => {
  const pagelink = pageContext.query.slug;

  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPHCMS_TOKEN,
    },
  });

  const query = gql`
    query ($pagelink: String!) {
      cars(where: { slug: $pagelink }) {
        brand
        model
        year
        price
        colour
        slug
        tags
        image {
          url
        }
        id
      }
    }
  `;

  const variables = { pagelink };

  const data = await graphQLClient.request(query, variables);
  let car = data.cars[0];
  console.log("car", car);

  return {
    props: {
      car,
    },
  };
};

const Car = ({ car }) => {
  return (
    <div>
      {car ? (
        <div className={style.main}>
          <div key={car.id} className={style.individual}>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              margin="10vh"
            >
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
                  R {car.price}
                  <Box as="span" color="gray.600" fontSize="sm"></Box>
                </Box>
              </Box>
              <Carousel>
                {car.image.map((img, key) => (
                  <div  key={key} >
                    <img src={img.url} className={style.carimage} />
                  </div>
                ))}
              </Carousel>
            </Box>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Car;
