import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongsStart } from "../redux/songSlice";
import SearchBar from "../components/SearchBar";
import SongItem from "../components/SongItem";

const SongList = () => {
  const dispatch = useDispatch();
  const { filteredSongs, loading, error } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Song List</h1>
      <SearchBar />
      <ul className="space-y-4">
        {filteredSongs.map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
      </ul>
    </div>
  );
};

export default SongList;
