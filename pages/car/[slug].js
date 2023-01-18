import { gql, GraphQLClient } from "graphql-request";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styled from "styled-components";
import CarEmail from "../../components/CarInterestEmail";
import Transmission from "../../public/CarGear.svg";
import Mileage from "../../public/CarMileage.svg";
import Door from "../../public/CarDoor.svg";
import Seats from "../../public/CarSeat.svg";
import FuelType from "../../public/CarFuel.svg";

export const getServerSideProps = async (pageContext) => {
  const pagelink = pageContext.query.slug;

  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    query ($pagelink: ID!) {
      cars(where: { id: $pagelink }) {
        brand
        model
        year
        price
        mileage
        doors
        seats
        colour
        slug
        location
        tags
        fuel
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

  return {
    props: {
      car,
    },
  };
};

const Car = ({ car }) => {
  const format = (num) => {
    let numArray = num.toString().split("").reverse();
    for (let i = 3; i < numArray.length; i += 4) {
      numArray.splice(i, 0, ",");
    }
    return numArray.reverse().join("");
  };

  return (
    <Container>
      <CarContainer>
        <Carousel
          dynamicHeight={false}
          showThumbs={true}
          showStatus={false}
          swipeable={true}
          showArrows={true}
        >
          {car.image.map((img, key) => (
            <img
              key={key}
              sizes="320 640 750"
              layout="responsive"
              width={1400}
              height={980}
              src={img.url}
              alt="carousel car image"
            />
          ))}
        </Carousel>
        <CarInfo>
          <CarHeading>
            <p>
              {car.brand}&nbsp;
              {car.model}
            </p>

            <Price>R{format(car.price)}</Price>
          </CarHeading>
          <p>
            {car.year} <Text>{car.colour}</Text>
          </p>
          <BottomTextInfo>
            <Icon>
              <Transmission />
              Manual
            </Icon>
            {/* <Icon>
              <Door />
              <p>{car.doors}</p>
            </Icon> */}
            <Icon>
              <FuelType style={{ height: "30px", width: "35px" }} />
              <p>{car.fuel}</p>
            </Icon>
            {car.seats > 0 ? (
              <Icon>
                <Seats />
                <p>{car.seats}</p>
              </Icon>
            ) : null}
            <Icon>
              <Mileage />
              <p>{car.mileage.toLocaleString()}km</p>
            </Icon>
          </BottomTextInfo>
        </CarInfo>
      </CarContainer>
      <InterestContainer>
        <CarEmail car={car} />
      </InterestContainer>
    </Container>
  );
};

export default Car;

const Container = styled.div`
  min-height: 80vh;
  background-image: rgb(0, 0, 77);
  width: 90vw;
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-left: auto;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 90vw;
  }
`;

const Icon = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  @media (max-width: 900px) {
    gap: 2px;
  }
`;

const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 900px) {
    gap: 15px;
  }
`;

const CarContainer = styled.div`
  margin-top: 7%;
  width: 40%;
  @media (max-width: 900px) {
    width: 90%;
    margin-top: 15%;
  }
`;

const InterestContainer = styled.div`
  margin-top: 7%;
  width: 70%;
  @media (max-width: 900px) {
    width: 90%;
  }
`;

const CarHeading = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 20px;
  align-items: top;
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

const BottomTextInfo = styled.span`
  align-items: center;
  div {
    justify-content: center;
  }
  svg {
    height: 25px;
    width: 25px;
  }
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    gap: 25px;
    margin-bottom: 5px;
  }
`;
