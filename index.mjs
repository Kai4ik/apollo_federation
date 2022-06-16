import { ApolloServer } from "apollo-server";
import { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";

const PORT = process.env.PORT || 4000;

// Initializing an ApolloGateway instance
const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: "artists", url: "http://host.docker.internal:8001" },
      { name: "songs", url: "http://host.docker.internal:8002" },
      { name: "playlists", url: "http://host.docker.internal:8004" },
    ],
  }),
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server
  .listen({ port: PORT })
  .then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
