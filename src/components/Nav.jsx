// src/components/Nav.jsx
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">[cisc 1115]</Link>
      <ul className="navbar-nav">
        <li><Link to="/tests">tests</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
