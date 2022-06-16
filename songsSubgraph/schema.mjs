import { gql } from "apollo-server";

// creating schema by defining types
export const typeDefs = gql`
 extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0",
        import: ["@key"])

  type Song @key(fields: "title"){
    title: String!
    duration: Float,
    author: Artist,
    playlist: Playlist
  }

  type Artist @key(fields: "artistID") {
    artistID: ID!
    songs: [Song]
  }

  type Playlist @key(fields: "playlistID") {
    playlistID: ID!
    songs: [Song]
  }

  type Query {
    songs: [Song]
    song(title: String!): Song
  }
`;
