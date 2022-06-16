import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers.mjs";
import { typeDefs } from "./schema.mjs";
import { buildSubgraphSchema } from "@apollo/subgraph";

const PORT = process.env.PORT || 8001;

// The ApolloServer constructor requires two parameters: schema definition and set of resolvers.
const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

// The `listen` method launches a web server.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Artists server ready at ${url}`);
});
