import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSongStart } from "../redux/songSlice";

const SongForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      dispatch(createSongStart({ title, body }));
      setTitle("");
      setBody("");
      navigate("/songs");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 mb-4 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
      />
      <textarea
        placeholder="Song Description"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-3 mb-4 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
        rows="3"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Add Song
      </button>
    </form>
  );
};

export default SongForm;
