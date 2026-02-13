import sunSvg from "/src/assets/images/icon-sun.svg";
import moonSvg from "/src/assets/images/icon-moon.svg";
import { ContextTheme } from "./contexts/ContextTheme";
import { useContext } from "react";
const Header = () => {
  const { theme, toggleTheme } = useContext(ContextTheme);
  const changeTheme = () => {
    toggleTheme();
  };

  const themeIcon = theme === "light" ? moonSvg : sunSvg;
  return (
    <div className="flex w-full h-full justify-between items-center">
      <h1 className="text-[24px] h-fit tracking-[0.5em] font-bold text-white">
        TODO
      </h1>
      <button className="h-fit hover:cursor-pointer" onClick={changeTheme}>
        <img
          src={themeIcon}
          alt="theme icon"
          className="object-cover w-full h-full"
        />
      </button>
    </div>
  );
};
export default Header;
