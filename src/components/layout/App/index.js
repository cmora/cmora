import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../../layout/Header';
import Loader from '../../base/Loader';
import Page from '../../../screens/Page';

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Header />
        <Switch>
          <Route path="/about">
            <Page><About /></Page>
          </Route>
          <Route path="/works">
            <Page><Works /></Page>
          </Route>
          <Route path="/contact">
            <Page><Contact /></Page>
          </Route>
          <Route path="/">
            <Page><Home /></Page>
          </Route>
        </Switch>
        <Loader loading={false} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Works() {
  return <h2>Works</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
