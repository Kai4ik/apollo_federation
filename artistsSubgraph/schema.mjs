import { gql } from "apollo-server";

// creating schema by defining types
export const typeDefs = gql`
  extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0",
        import: ["@key", "@shareable"])

  type Artist @key(fields: "artistID") {
    artistID: ID!,
    artistName: String!
    fullName: String!
    age: Int
    listeners: Int @shareable,
  }

  type Query {
    artists: [Artist]
    artist(artistName: String!): Artist
  }
`;
