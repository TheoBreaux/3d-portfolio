import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="text-sm w-10 h-10 rounded-lg  bg-white items-center justify-center flex font-bold shadow-md border border-blue-300"
      >
        <div className="col">
          <p className="blue-gradient_text">TB</p>
          {/* <IoHome
            className="blue-gradient"
            color="#00c6ff"
            size={20}
          /> */}
        </div>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/marketing"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Marketing
        </NavLink>

        {/* <NavLink
          to="/education"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Education
        </NavLink> */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
