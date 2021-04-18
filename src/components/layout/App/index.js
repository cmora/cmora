import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {  useSelector } from 'react-redux';

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Loader from '../../base/Loader';
import ProjectNavigation from '../../base/ProjectNavigation';

import { currentProjectSelector } from '../../../store/slices/projects/projects-selectors';

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

  const project = useSelector(currentProjectSelector);

  console.log(project)

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
        {project && (
          <ProjectNavigation
            prev={project?.prevProject}
            next={project?.nextProject}
          />
        )}
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
