import React, { useEffect } from "react";
import fetch from 'isomorphic-unfetch';
import { Box, Image, Badge } from '@chakra-ui/react';

const Cars = ({ cars }) => {
  return (
    <div>
      <div>
        {cars ?
        <div> 
        {cars.map((car, key) => (
          <div key={car._id}>
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={car.imageUrl} alt={car.brand}/>
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {car.colour} &bull; {car.year}
          </Box>
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {car.brand} {car.model}
        </Box>
        <Box>
          R 
          {car.price}
          <Box as='span' color='gray.600' fontSize='sm'>
          </Box>
        </Box>
      </Box>
    </Box> 
          </div>
        ))}
            </div>
            : null
          }
      </div>
      
    </div>
  );
}

export async function getServerSideProps() {
  console.log("here");
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;
  // request posts from api
  let response = await fetch('http://localhost:3000/api/cars');
  // let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/cars`);
  // extract the data
  let { data } = await response.json();
  console.log("data:", data);
  return {
    props: {
      cars: data,
    },
  };
}

export default Cars;
