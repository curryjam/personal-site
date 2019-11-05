import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>A modern, responsive website created with React.</p>
        </div>
      </header>
      <p> Welcome to my website. You're more than welcome to find out more <Link to="/about">about me</Link>,
        {' '}
        <Link to="/resume">my experiences</Link>, {' '}
        <Link to="/projects">my past work</Link>, {' '}
        or <Link to="/contact">to contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
