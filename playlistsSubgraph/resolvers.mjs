import { playlists } from "./data.mjs";

// defining resolvers
export const resolvers = {
  Query: {
    playlists: () => playlists,
    playlist: (_, { playlistTitle }) =>
      playlists.filter(
        (playlist) => playlist.playlistTitle === playlistTitle
      )[0],
  },
  Playlist: {
    __resolveReference: (playlist) =>
      playlists.filter(
        (element) => element.playlistID == playlist.playlistID
      )[0],
  },
};
