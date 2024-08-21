import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSongStart, deleteSongStart } from "../redux/songSlice";

const SongItem = ({ song }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSong, setEditedSong] = useState(song);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (editedSong.title && editedSong.body) {
      dispatch(updateSongStart(editedSong));
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteSongStart(song.id));
  };

  if (isEditing) {
    return (
      <li className="bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          value={editedSong.title}
          onChange={(e) =>
            setEditedSong({ ...editedSong, title: e.target.value })
          }
          className="w-full p-2 mb-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
        />
        <textarea
          value={editedSong.body}
          onChange={(e) =>
            setEditedSong({ ...editedSong, body: e.target.value })
          }
          className="w-full p-2 mb-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          rows="3"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{song.title}</h3>
      <p className="text-gray-600 mb-4">{song.body}</p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default SongItem;
