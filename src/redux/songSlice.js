import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    filteredSongs: [],
    loading: false,
    error: null,
    searchTerm: "",
  },
  reducers: {
    fetchSongsStart: (state) => {
      state.loading = true;
    },
    fetchSongsSuccess: (state, action) => {
      state.songs = action.payload;
      state.filteredSongs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    createSongStart: (state) => {
      state.loading = true;
    },
    createSongSuccess: (state, action) => {
      state.songs.push(action.payload);
      state.filteredSongs = state.songs;
      state.loading = false;
    },
    createSongFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateSongStart: (state) => {
      state.loading = true;
    },
    updateSongSuccess: (state, action) => {
      const index = state.songs.findIndex(
        (song) => song.id === action.payload.id
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
        state.filteredSongs = state.songs;
      }
      state.loading = false;
    },
    updateSongFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteSongStart: (state) => {
      state.loading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
      state.filteredSongs = state.songs;
      state.loading = false;
    },
    deleteSongFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredSongs = state.songs.filter(
        (song) =>
          song.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          song.body.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
  setSearchTerm,
} = songSlice.actions;

export default songSlice.reducer;
