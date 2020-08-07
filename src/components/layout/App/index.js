import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Loader from '../../base/Loader';

// Screens
import Page from '../../../screens/Page';
import Home from '../../../screens/Home';
import Projects from '../../../screens/Projects';
import About from '../../../screens/About';
import Project from '../../../screens/Project';

const App = () => {

  useEffect(() => {
    console.info("Designed and Developed By Cristhian Mora");
  }, []);

  return (
    <Router>
      <div className="main-wrapper">
        <Header />
        <Switch>
          <Route path="/about">
            <Page><About /></Page>
          </Route>
          <Route path="/projects">
            <Page><Projects /></Page>
          </Route>
          <Route path="/project/:slug">
            <Page><Project /></Page>
          </Route>
          <Route path="/contact">
            <Page><Contact /></Page>
          </Route>
          <Route path="/">
            <Page><Home /></Page>
          </Route>
        </Switch>
        <Footer />
        <Loader loading={false} />
      </div>
    </Router>
  );
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
