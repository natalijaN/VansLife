import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full shadow z-50 bg-orange-50">
      <div className="px-12 py-8 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold pr-4">
          #VANLIFE
        </Link>
        <div className="space-x-4 text-gray-700 font-semibold">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-semibold pr-4 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              `font-semibold pr-4 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Vans
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
