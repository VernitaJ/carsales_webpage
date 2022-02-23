import { GraphQLClient } from "graphql-request";

export default async ({ body }, res) => {
  const { id, ...data } = JSON.parse(body);

  const graphcms = new GraphQLClient(process.env.ENDPOINT, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  try {
    const { createCar } = await graphcms.request(
      `
    mutation createCar($formData: Json!, $formId: ID!) {
        createCar(data: {formData: $formData, form: {connect: {id: $formId}}}) {
          id
        }
      }`,
      {
        data,
        id,
      }
    );

    res.status(201).json(createCar);
  } catch ({ message, error }) {
    console.log("failed on post", error)
    res.status(400).json({ message });
  }
};
