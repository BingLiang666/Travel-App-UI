import { Link } from "react-router-dom";
import "./navbar.css";

/**
 * The navbar of the whole web application
 */
export default function Navbar() {
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcon fa-solid fa-earth-americas"></i>
        <i className="navIcon fa-solid fa-plane-departure"></i>
        <i className="navIcon fa-solid fa-mountain-sun"></i>
        <i className="navIcon fa-solid fa-umbrella-beach"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/" style={{}}>
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/" style={{}}>
              ABOUT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/records" style={{}}>
              RECORDS
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/create" style={{}}>
              CREATE
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <img
          className="navImg"
          src={require("../../imgs/alex-azabache-V83v-MYB_Z8-unsplash.jpg")}
          alt="main_menu"
        />
        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
