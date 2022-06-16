import { artists } from "./data.mjs";

// defining resolvers
export const resolvers = {
  Query: {
    artists: () => artists,
    artist: (_, { artistName }) =>
      artists.filter((artist) => artist.artistName === artistName)[0],
  },
  Artist: {
    __resolveReference: (artist) =>
      artists.filter((element) => element.artistID == artist.artistID)[0],
  },
};
