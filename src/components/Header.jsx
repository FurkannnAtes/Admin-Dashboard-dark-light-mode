import MenuIcon from "@mui/icons-material/Menu";
import { MainContext, useContext } from "../context";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  const { navShow, setNavShow, thema, setThema } = useContext(MainContext);
  const handleNavCollapse = () => {
    if (navShow === "show") {
      setNavShow("hidden");
    } else {
      setNavShow("show");
    }
  };
  const themaToggler = () => {
    if (thema === "dark") {
      setThema("light");
    } else {
      setThema("dark");
    }
  };
  return (
    <div
      className={`py-2 px-5 border-b-2 xl:border-0 flex justify-between items-center ${
        thema === "light" && "bg-lightModeBg"
      }  ${thema === "dark" && "bg-darkModeBg"} ${
        thema === "dark" && "text-white"
      } ${thema === "dark" && "text-dark"}
      ${thema === "dark" && "border-white"}
      ${thema === "light" && "border-black"}`}
    >
      <button onClick={() => handleNavCollapse()} className="block xl:hidden">
        <MenuIcon />{" "}
      </button>
      <div className="hidden flex-col w-fit lg:flex">
        <span className="font-extrabold text-3xl ">Dashboard</span>
        <span className="font-semibold w-full text-center bg-lightBlueBg rounded-md p-2">
          mm/dd/yyyy
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => themaToggler()}>
          {thema === "dark" && <LightModeIcon />}
          {thema === "light" && <DarkModeIcon />}
        </button>
        <div className="flex flex-col text-gray-400">
          <span>
            Hey,<b>Furkan</b>
          </span>
          <span className="text-center">Admin</span>
        </div>
        <div>
          <img
            className="rounded-full w-[50px]"
            src="/images/profile-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
