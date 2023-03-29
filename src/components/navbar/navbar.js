import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <div>
              <h3>Chat <i className="fas fa-comment"></i></h3>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/voice">
          <div>
              <h3>Voice <i className="fas fa-microphone"></i></h3>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;