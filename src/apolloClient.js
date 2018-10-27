import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import gql from 'graphql-tag'

// setup your `RestLink` with your endpoint
const link = new RestLink({ uri: "https://swapi.co/api/" });

// setup your client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const query = gql`
  query luke {
    person @rest(type: "Person", path: "people/1/") {
      name
    }
  }
`;

export async function fetchData() {
  // Invoke the query and log the person's name
  const data = await client.query({query});
  console.log(data);
}
