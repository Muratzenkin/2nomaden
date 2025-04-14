import Logo from "../../../public/icon/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex text-white items-center gap-4 font-bold text-2xl">
            <img src={Logo} alt="logo" className="w-20 rounded-full" />
            <NavLink to="/">
              <span>2 NOMADEN</span>
            </NavLink>
          </div>
          <div className="text-white">
            <ul className="flex items-center gap-6 text-xl py-4 sm:py-0">
              <NavLink to="/about">
                <li>About</li>
              </NavLink>
              <NavLink to="/blog">
                <li>Blog</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
