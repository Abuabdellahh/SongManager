import React from "react";
import SongForm from "../components/SongForm";

const CreateSong = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Create New Song</h1>
      <SongForm />
    </div>
  );
};

export default CreateSong;
