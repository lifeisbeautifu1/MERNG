import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-light mb-4 p-2">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>GraphQL</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
