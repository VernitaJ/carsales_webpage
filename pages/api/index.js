import { GraphQLClient, gql } from "graphql-request";

export default async (req, res) => {
  const variables = req.body;

  const mutation = gql`
    mutation CreateCar($eventId: ID!, $name: String!, $story: String!) {
      createMemory(
        data: {
          name: $name
          story: $story
          event: { connect: { id: $eventId } }
        }
      ) {
        id
      }
    }
  `;

  const client = new GraphQLClient(process.env.ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });
  await client.request(mutation, variables);

  res.status(200).json({ success: true });
};
