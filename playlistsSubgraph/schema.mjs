import { gql } from "apollo-server";

// creating schema by defining types
export const typeDefs = gql`
 extend schema
    @link(url: "https://specs.apollo.dev/federation/v2.0",
        import: ["@key"])

  type Playlist @key(fields: "playlistID"){
    playlistID: ID!,
    playlistTitle: String!
  }

  type Query {
    playlists: [Playlist]
    playlist(playlistTitle: String!): Playlist
  }
`;
