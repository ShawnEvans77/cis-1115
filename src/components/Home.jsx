import React from 'react';
import '../App.css'; // Still using App.css for styles
import InfoSection from './InfoSection';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <header className="title">
        <h1>cisc 1115</h1>
          <div className="button-group">
          <Link to="/tests"   className="btn btn-primary">tests</Link>
          <Link to="/contact" className="btn btn-outline">contact</Link>
        </div>
      </header>
      <InfoSection/>
    </main>
  );
}

export default Home;
