import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <div>
        <NavLink
          to="/"
          className="text-sm w-10 h-10 mb-4 rounded-lg bg-white items-center justify-center flex font-bold shadow-md border border-blue-300"
        >
          <div className="col">
            <p className="blue-gradient_text">TB</p>
          </div>
        </NavLink>
      </div>

      <div>
        <nav className="flex text-lg gap-7 font-medium">
          {['/about', '/projects', '/marketing', '/acting', '/contact'].map(
            (path) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-blue-500'
                      : location.pathname === '/acting'
                      ? 'text-yellow-500'
                      : 'text-black'
                  } text-base sm:text-lg md:text-xl`
                }
              >
                {path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;



// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <header className="header">
//       <div>
//         <NavLink
//           to="/"
//           className="text-sm w-10 h-10 mb-4 rounded-lg bg-white items-center justify-center flex font-bold shadow-md border border-blue-300"
//         >
//           <div className="col">
//             <p className="blue-gradient_text">TB</p>
//           </div>
//         </NavLink>
//       </div>

//       <div>
//         <nav className="flex text-lg gap-7 font-medium">
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               ${
//                 isActive ? 'text-blue-500' : 'text-black'
//               } text-base sm:text-lg md:text-xl
//             }
//           >
//             About
//           </NavLink>
//           <NavLink
//             to="/projects"
//             className={({ isActive }) =>
//               ${
//                 isActive ? 'text-blue-500' : 'text-black'
//               } text-base sm:text-lg md:text-xl
//             }
//           >
//             Projects
//           </NavLink>
//           <NavLink
//             to="/marketing"
//             className={({ isActive }) =>
//               ${
//                 isActive ? 'text-blue-500' : 'text-black'
//               } text-base sm:text-lg md:text-xl
//             }
//           >
//             Marketing
//           </NavLink>

//           <NavLink
//             to="/acting"
//             className={({ isActive }) =>
//               ${
//                 isActive ? 'text-blue-500' : 'text-black'
//               } text-base sm:text-lg md:text-xl
//             }
//           >
//             Acting
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               ${
//                 isActive ? 'text-blue-500' : 'text-black'
//               } text-base sm:text-lg md:text-xl
//             }
//           >
//             Contact
//           </NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// };