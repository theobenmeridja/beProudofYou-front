import React, { Component } from 'react';
import LandingPage from './pages/LandingPage.js';
import About from './pages/About.js';
import ProjectApplication from './pages/ProjectApplication.js';
import MyGallery from './pages/Gallery.js';
import ProjectGallery from './pages/ProjectGallery.js';
import ProjectDescription from './pages/ProjectDescription.js';
import NavigationBar from './pages/NavigationBar.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import projectId from './reducers/detailsDisplay.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';
const store = createStore(combineReducers({projectId}));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={MyGallery} />
              <Route path="/projectGallery" component={ProjectGallery} />
              <Route path="/projectDescription" component={ProjectDescription} />
              <Route path="/postuler" component={ProjectApplication} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
