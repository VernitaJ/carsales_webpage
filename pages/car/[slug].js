import { gql, GraphQLClient } from "graphql-request";
import { Box, Badge, Link } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export const getServerSideProps = async (pageContext) => {
  const pagelink = pageContext.query.slug;

  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
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
        location
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
        <div className="main">
          <div key={car.id} className="individual">
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="10px"
              border="3px solid blue"
              overflow="hidden"
              margin="10vh"
              padding="10vh"
              backgroundColor="rgba(255, 255, 255, .6)"
            >
              <Box p="6" marginBottom="2rem" fontSize="1.2rem">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="loose"
                  isTruncated
                >
                  {car.brand} {car.model}
                </Box>
                <Box display="flex" alignItems="baseline">
                  <Box
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xl"
                    ml="2"
                  >
                    {car.colour} &bull; {car.year}
                  </Box>
                </Box>

                <Box>
                  R {car.price}
                  <Box as="span" fontSize="sm"></Box>
                </Box>
              </Box>
              <Carousel>
                {car.image.map((img, key) => (
                  <div key={key} className="carimage">
                    <Image src={img.url} alt="carousel image" />
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
