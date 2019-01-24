import React, { Component } from 'react';
import LandingPage from './components/LandingPage.js';
import About from './components/About.js';
import Chat from './components/Chat.js';
import Consideration from './components/Consideration.js';
import MyGallery from './components/Gallery.js';
import ProjectGallery from './components/ProjectGallery.js';
import ProjectDescription from './components/ProjectDescription.js';
import NavigationBar from './components/NavigationBar.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/about" component={About} />
              <Route path="/consideration" component={Consideration} />
              <Route path="/gallery" component={MyGallery} />
              <Route path="/projectGallery" component={ProjectGallery} />
              <Route path="/projectDescription" component={ProjectDescription} />
              <Route path="/chat" component={Chat} />
            </Switch>
          </div>
        </Router>
    );
  }
}


export default App;
