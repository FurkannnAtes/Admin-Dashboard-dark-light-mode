import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportIcon from "@mui/icons-material/Report";
import BallotIcon from "@mui/icons-material/Ballot";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { MainContext, useContext } from "../context";
const Navbar = () => {
  const [navTabs, setNavTabs] = useState(0);
  const { setNavShow, thema } = useContext(MainContext);
  return (
    <div
      className={`flex flex-col border-r-2 border-lightModeBorder xl:border-0 gap-3 py-3 px-5 w-[300px] select-none ${
        thema === "light" && "bg-lightModeBg"
      }  ${thema === "dark" && "bg-darkModeBg"} ${
        thema === "dark" && "text-white"
      } ${thema === "dark" && "text-dark"} 
      ${thema === "dark" && "border-white"}
      ${thema === "light" && "border-black"} min-h-[100vh] relative z-40`}
    >
      <div
        className="flex items-center justify-center mb-3 pr-6
       gap-2 "
      >
        <img className="w-[50px]" src="/images/logo.png" alt="" />{" "}
        <span className="font-extrabold text-3xl">
          OFE<span className="text-red-400">NOS</span>
        </span>
      </div>
      <button
        onClick={() => setNavShow("hidden")}
        className="absolute top-5 right-5 xl:hidden"
      >
        <CloseIcon />
      </button>
      <div
        className={`${
          navTabs === 0 &&
          "bg-lightBlueBg border-l-8 border-purpleBorder text-purpleText"
        } px-10 py-5  duration-300 hover:border-l-8 hover:border-purpleBorder hover:bg-lightBlueBg hover:cursor-pointer hover:pl-16`}
        onClick={() => setNavTabs(0)}
      >
        <AutoAwesomeMosaicIcon /> Dashboard
      </div>
      <div
        className={`${
          navTabs === 1 &&
          "bg-lightBlueBg border-l-8 border-purpleBorder text-purpleText"
        } px-10 py-5  duration-300 hover:border-l-8 hover:border-purpleBorder hover:bg-lightBlueBg hover:cursor-pointer hover:pl-16`}
        onClick={() => setNavTabs(1)}
      >
        <PersonIcon /> Customers
      </div>
      <div
        className={`${
          navTabs === 2 &&
          "bg-lightBlueBg border-l-8 border-purpleBorder text-purpleText"
        } px-10 py-5  duration-300 hover:border-l-8 hover:border-purpleBorder hover:bg-lightBlueBg hover:cursor-pointer hover:pl-16`}
        onClick={() => setNavTabs(2)}
      >
        <ReceiptLongIcon /> Orders
      </div>
      <div
        className={`${
          navTabs === 3 &&
          "bg-lightBlueBg border-l-8 border-purpleBorder text-purpleText"
        } px-10 py-5  duration-300 hover:border-l-8 hover:border-purpleBorder hover:bg-lightBlueBg hover:cursor-pointer hover:pl-16`}
        onClick={() => setNavTabs(3)}
      >
        <LeaderboardIcon /> Analytics
      </div>
      <div
        className={`${
          navTabs === 4 &&
          "bg-lightBlueBg border-l-8 border-purpleBorder text-purpleText"
        } px-10 py-5  duration-300 hover:border-l-8 hover:border-purpleBorder hover:bg-lightBlueBg hover:cursor-pointer hover:pl-16 relative flex`}
        onClick={() => setNavTabs(4)}
      >
        <div>
          <EmailIcon /> Messages
        </div>
        <div className="bg-red-400  text-white rounded-full w-[40px] h-[25px] flex items-center justify-center absolute right-5 ">
          16
        </div>
      </div>
      <div
        className={`${
          navTabs === 5 &&
          "bg-lightBlueBg border-l-8 border-purpleBorder text-purpleText"
        } px-10 py-5  duration-300 hover:border-l-8 hover:border-purpleBorder hover:bg-lightBlueBg hover:cursor-pointer hover:pl-16`}
        onClick={() => setNavTabs(5)}
      >
        <BallotIcon /> Products
      </div>
      <div
        className={`${
          navTabs === 6 &&
          "bg-lightBlueBg border-l-8 border-purpleBorder text-purpleText"
        } px-10 py-5  duration-300 hover:border-l-8 hover:border-purpleBorder hover:bg-lightBlueBg hover:cursor-pointer hover:pl-16`}
        onClick={() => setNavTabs(6)}
      >
        <ReportIcon /> Reports
      </div>
      <div
        className={`${
          navTabs === 7 &&
          "bg-lightBlueBg border-l-8 border-purpleBorder text-purpleText"
        } px-10 py-5  duration-300 hover:border-l-8 hover:border-purpleBorder hover:bg-lightBlueBg hover:cursor-pointer hover:pl-16`}
        onClick={() => setNavTabs(7)}
      >
        <SettingsIcon /> Settings
      </div>
      <div
        className={`${
          navTabs === 8 &&
          "bg-lightBlueBg border-l-8 border-purpleBorder text-purpleText"
        } px-10 py-5  duration-300 hover:border-l-8 hover:border-purpleBorder hover:bg-lightBlueBg hover:cursor-pointer hover:pl-16`}
        onClick={() => setNavTabs(8)}
      >
        <LogoutIcon /> Logout
      </div>
    </div>
  );
};

export default Navbar;
