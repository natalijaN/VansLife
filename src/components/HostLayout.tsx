import { NavLink, Outlet } from "react-router-dom";

export const HostLayout = () => {
  return (
    <>
      <div className="mt-[96px] flex items-start justify-start bg-orange-50 px-80 py-10">
        <div className="space-x-4 text-gray-700 font-semibold">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              `font-semibold pr-4 focus:underline-offset-4 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="income"
            className={({ isActive }) =>
              `font-semibold pr-4 focus:underline-offset-4 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Income
          </NavLink>
          <NavLink
            to="vans"
            className={({ isActive }) =>
              `font-semibold pr-4 focus:underline-offset-4 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Vans
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              `font-semibold pr-4 focus:underline-offset-4 ${
                isActive ? "underline underline-offset-4" : ""
              }`
            }
          >
            Reviews
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};
