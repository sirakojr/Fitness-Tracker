import { Link } from "react-router-dom";
import useTheme from "../../store/theme";
const matchMedia =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const Navbar = () => {
  const setTheme = useTheme((state) => state.setTheme);
  return (
    <>
      <nav className="flex justify-between items-center h-[10vh] px-6 sticky top-0 z-50 bg-white  text-zinc-900 dark:bg-zinc-900 dark:text-white border-b border-zinc-200">
        <div>
          <Link
            to={"#"}
            className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100"
          >
            <span>Fitness Tracker</span>
          </Link>
        </div>
        <ul className="flex gap-x-6">
          <li>
            <Link to={`#`}>
              <span className=" text-zinc-900 dark:text-zinc-100">
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link to={`#`}>
              <span className="text-zinc-900 dark:text-zinc-100">Workouts</span>
            </Link>
          </li>
          <li>
            <div className="relative group ">
              <button className="">Appearance</button>
              <div className="absolute hidden group-hover:block py-2 px-2 rounded-md shadow-md bg-white dark:bg-zinc-800">
                <button
                  className="block  px-4 py-1 mb-1 rounded-sm hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </button>
                <button
                  className="block px-4 py-1 mb-1 rounded-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 "
                  onClick={() => setTheme("light")}
                >
                  Light
                </button>
                <button
                  className="block px-4 py-1 mb-1 rounded-sm hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  onClick={() => setTheme(matchMedia ? "dark" : "light")}
                >
                  System
                </button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
