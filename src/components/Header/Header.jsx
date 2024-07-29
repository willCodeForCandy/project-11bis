import { Link, NavLink } from 'react-router-dom';
import logo from '/assets/logo.png';
import './Header.css';

const Header = ({ pages = [] }) => {
  return (
    <header className="stitched">
      <Link to="/" className="logo-wrapper">
        <img src={logo} alt="Una gotita de agua muy cuqui" id="logo" />
      </Link>

      <nav>
        <ul>
          {pages.map(page => {
            return (
              <li key={page.name}>
                <NavLink to={page.endpoint}>{page.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
