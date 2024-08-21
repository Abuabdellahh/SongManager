import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchSongs = () => axios.get(`${API_URL}/posts`);
export const createSong = (song) => axios.post(`${API_URL}/posts`, song);
export const updateSong = (song) =>
  axios.put(`${API_URL}/posts/${song.id}`, song);
export const deleteSong = (id) => axios.delete(`${API_URL}/posts/${id}`);
