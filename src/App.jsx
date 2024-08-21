import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SongList from "./pages/SongList";
import CreateSong from "./pages/CreateSong";

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<SongList />} />
            <Route path="/create" element={<CreateSong />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
};

export default App;
