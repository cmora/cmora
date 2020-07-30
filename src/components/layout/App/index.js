import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../../layout/Header';

import './Styles.scss';

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
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
