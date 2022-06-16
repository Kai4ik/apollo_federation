import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers.mjs";
import { typeDefs } from "./schema.mjs";
import { buildSubgraphSchema } from "@apollo/subgraph";

const PORT = process.env.PORT || 8002;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

// The `listen` method launches a web server.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Songs server ready at ${url}`);
});
