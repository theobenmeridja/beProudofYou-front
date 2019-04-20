import React, { Component } from 'react';
import LandingPage from './pages/LandingPage.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import ProjectApplication from './pages/ProjectApplication.js';
import MyGallery from './pages/Gallery.js';
import ProjectGallery from './pages/ProjectGallery.js';
import ProjectDescription from './pages/ProjectDescription.js';
import Admin from './pages/Admin.js';
import MentionsLegales from './pages/MentionsLegales.js';
import AdminProjectGallery from './pages/AdminProjectGallery.js';
import AdminProjectDescription from './pages/AdminProjectDescription.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import projectId from './reducers/passIdClientSide.reducer';
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
              <Route path="/admin" component={Admin} />
              <Route path="/adminProjectGallery" component={AdminProjectGallery} />
              <Route path="/AdminProjectDescription" component={AdminProjectDescription} />
              <Route path="/Contact" component={Contact} />
              <Route path="/mentionslegales" component={MentionsLegales} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;
