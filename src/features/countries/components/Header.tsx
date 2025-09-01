import { RxMoon, RxSun } from "react-icons/rx";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className=" p-4 py-6 md:p-8  shadow-xl bg-blue-white dark:bg-blue-dark ">
      <div className=" flex justify-between items-center max-w-7xl mx-auto">
        <Link to={"/"}>
          <h1 className="dark:text-blue-white text-blue-default font-bold">
            Where in the world?
          </h1>
        </Link>
        <button
          onClick={toggleTheme}
          className="w-32 flex items-center justify-center text-md gap-2 dark:text-blue-white text-blue-default font-semiBold "
        >
          {isDark ? (
            <RxSun className="dark:text-blue-white text-xl ml-20 sm:ml-0" />
          ) : (
            <RxMoon className="dark:text-blue-white text-xl ml-20 sm:ml-0" />
          )}{" "}
          <span className="hidden sm:block">Dark Mode</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
