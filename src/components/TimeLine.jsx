import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import { MainContext, useContext } from "../context";
const TimeLine = () => {
  const { thema } = useContext(MainContext);
  return (
    <div
      className={`flex flex-col sm:w-6/12 lg:w-4/12 min-h-ful p-4 ${
        thema === "light" && "bg-lightModeBg"
      }  ${thema === "dark" && "bg-darkModeBg"} ${
        thema === "dark" && "text-white"
      } ${thema === "dark" && "text-dark"} `}
    >
      <h1 className="font-extrabold text-2xl mb-3">Recent Updates</h1>
      <div
        className={`flex flex-col  gap-2 ${thema === "light" && "bg-white"}  ${
          thema === "dark" && "bg-darkModeBg"
        } ${thema === "dark" && "text-white"} ${
          thema === "dark" && "text-dark"
        } ${
          thema === "dark" && "border"
        } rounded-lg p-4 shadow-lg hover:shadow-none duration-300`}
      >
        <div className="flex items-center gap-2">
          <img
            className="w-14 rounded-full"
            src="/images/profile-2.jpg"
            alt=""
          />
          <div className="flex-wrap w-full ">
            <span className="font-extrabold">Mike Tyson</span>
            <span> Lorem ipsum dolor sit </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-14 rounded-full"
            src="/images/profile-3.jpg"
            alt=""
          />
          <div className="flex-wrap w-full ">
            <span className="font-extrabold">Juliete Prise</span>
            <span> Lorem ipsum dolor sit ipsum dolor sit </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-14 rounded-full"
            src="/images/profile-1.jpg"
            alt=""
          />
          <div className="flex-wrap w-full ">
            <span className="font-extrabold">Mike Tyson</span>
            <span> Lorem ipsum dolor sit </span>
          </div>
        </div>
      </div>
      <h1 className="font-extrabold text-2xl my-3">Sales Analytics</h1>
      <div className="flex flex-col gap-2">
        <div
          className={`${thema === "light" && "bg-white"}  ${
            thema === "dark" && "bg-darkModeBg"
          } ${thema === "dark" && "text-white"} ${
            thema === "dark" && "text-dark"
          } ${
            thema === "dark" && "border"
          } flex justify-between items-center p-2 rounded-md shadow-lg hover:shadow-none duration-300`}
        >
          <div className="flex gap-2">
            <div className="bg-purpleBg text-white flex items-center justify-center  w-[40px] h-[40px] p-2 rounded-full">
              <ShoppingCartIcon />
            </div>
            <span className="flex flex-col">
              <span className="text-md">ONLINE ORDERS</span>{" "}
              <span className="text-gray-300 text-sm">Last 24 Hours</span>
            </span>
          </div>
          <div className="text-green-400 text-sm">+14</div>
          <div className="text-sm font-semibold">1100</div>
        </div>
        <div
          className={`${thema === "light" && "bg-white"}  ${
            thema === "dark" && "bg-darkModeBg"
          } ${thema === "dark" && "text-white"} ${
            thema === "dark" && "text-dark"
          } ${
            thema === "dark" && "border"
          } flex justify-between items-center p-2 rounded-md shadow-lg hover:shadow-none duration-300`}
        >
          <div className="flex gap-2">
            <div className="bg-red-400 text-white flex items-center justify-center  w-[40px] h-[40px] p-2 rounded-full">
              <ShoppingBagIcon />
            </div>
            <span className="flex flex-col">
              <span className="text-md">ONLINE ORDERS</span>{" "}
              <span className="text-gray-300 text-sm">Last 24 Hours</span>
            </span>
          </div>
          <div className="text-green-400 text-sm">+14</div>
          <div className="text-sm font-semibold">1100</div>
        </div>
        <div
          className={`${thema === "light" && "bg-white"}  ${
            thema === "dark" && "bg-darkModeBg"
          } ${thema === "dark" && "text-white"} ${
            thema === "dark" && "text-dark"
          } ${
            thema === "dark" && "border"
          } flex justify-between items-center p-2 rounded-md shadow-lg hover:shadow-none duration-300`}
        >
          <div className="flex gap-2">
            <div className="bg-green-400 text-white flex items-center justify-center  w-[40px] h-[40px] p-2 rounded-full">
              <PersonIcon />
            </div>
            <span className="flex flex-col">
              <span className="text-md">ONLINE ORDERS</span>{" "}
              <span className="text-gray-300 text-sm">Last 24 Hours</span>
            </span>
          </div>
          <div className="text-red-400 text-sm">-17</div>
          <div className="text-sm font-semibold">1100</div>
        </div>
        <div className="border-purple-600 border rounded-lg h-12 mt-4 duration-300 hover:text-white hover:bg-purpleBg hover:cursor-pointer border-dotted flex justify-center items-center">
          Add +
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
