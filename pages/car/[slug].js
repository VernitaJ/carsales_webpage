import { gql, GraphQLClient } from "graphql-request";
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

  const format = (num) => {
    let numArray = num.toString().split('').reverse();
    for (let i = 3; i < numArray.length; i += 4) {
      numArray.splice(i, 0, ',');
    }
    return numArray.reverse().join("");
  }
  return (
    <div>
      {car ? (
        <div className="main">
          <div key={car.id} className="individual">
            <div className="text-black bold ml-20">
              <p>
                {car.brand} {car.model}
              </p>
              <p className="text-black ">
                {car.colour} &bull; {car.year}
              </p>
              <br />
              <p className="text-black">R{format(car.price)}</p>
              <button className="interest-button">Interested</button>

            </div>
            <Carousel>
              {car.image.map((img, key) => (
                <div key={key} className="carimage">
                  <Image
                    sizes="320 640 750"
                    layout="responsive"
                    width={1400}
                    height={980}
                    src={img.url} alt=" carousel image" />
                </div>
              ))}
            </Carousel>
          </div>
        </div >
      ) : null
      }
    </div >
  );
};

export default Car;
