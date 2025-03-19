import '../App.css'; // Still using App.css for styles
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/info">info</Link></li>
        <li><Link to="/learn">learn</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;