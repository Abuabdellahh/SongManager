import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/songSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.songs.searchTerm);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search songs..."
      value={searchTerm}
      onChange={handleSearch}
      className="w-full p-3 mb-6 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
    />
  );
};

export default SearchBar;
