import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Song Manager</h1>
      <p className="text-xl mb-8">Manage your favorite songs with ease!</p>
      <div className="space-x-4">
        <Link
          to="/songs"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          View Songs
        </Link>
        <Link
          to="/create"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Create Song
        </Link>
      </div>
    </div>
  );
};

export default Home;
