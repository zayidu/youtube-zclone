import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/Sidebar/SideBar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import SearchPage from './components/SearchPage/SearhPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Router>
        {/* Header  */}
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              {/* SideBar  */}
              <SideBar />
              {/* SearchPage  */}
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              {/* SideBar  */}
              <SideBar />
              {/* Recommended Videos  */}
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
