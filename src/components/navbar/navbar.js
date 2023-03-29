import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Chat</Link>
        </li>
        <li>
          <Link to="/voice">Voice</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;