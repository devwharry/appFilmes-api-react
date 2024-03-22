import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav id="navbar">
        <h2>
          <Link to="/"> 
            <BiCameraMovie />MoviesLib
          </Link>
        </h2>
        <input type="text" placeholder="Buscar um filme" />
        <button type="submit">
            <BiSearchAlt2 />
        </button>
    </nav>
  );
};

export default Navbar;