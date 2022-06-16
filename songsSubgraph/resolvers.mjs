import { songs } from "./data.mjs";

// defining resolvers
export const resolvers = {
  Query: {
    songs: () => songs,
    song: (_, { title }) => songs.filter((song) => song.title === title)[0],
  },
  Artist: {
    songs: (artist) => songs.filter((song) => song.artist === artist.artistID),
  },
  Playlist: {
    songs: (playlist) =>
      songs.filter((song) => song.playlist === playlist.playlistID),
  },
  Song: {
    author: (song) => {
      return { __typename: "Artist", artistID: song.artist };
    },
  },
  Song: {
    playlist: (song) => {
      return { __typename: "Playlist", playlistID: song.playlist };
    },
  },
};
