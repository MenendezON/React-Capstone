import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="details">Details</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}
export default Header;
