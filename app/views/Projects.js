import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
        </div>
      </header>
      {data.length === 0 ? 
        <div className="stay-tuned">
          <p>Currently working on some cool projects. Stay tuned!</p>
        </div> : data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
