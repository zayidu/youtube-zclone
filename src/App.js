import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      {/* Header  */}
      <Header/>
      <div className="app__page">
      {/* SideBar  */}
        <SideBar/>
      {/* Recommended Videos  */}
        <RecommendedVideos/>
      </div>
    </div>
  );
}

export default App;
