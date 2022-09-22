import AnalyticsIcon from "@mui/icons-material/Analytics";
import BarChartIcon from "@mui/icons-material/BarChart";
import MovingIcon from "@mui/icons-material/Moving";
import { MainContext, useContext } from "../context";
const Cards = () => {
  const { thema } = useContext(MainContext);
  return (
    <div className="grid w-full lg:grid-cols-2  xl:grid-cols-3 gap-4  pt-[60px] ">
      <div
        className={`shadow-lg duration-300 hover:shadow-none rounded-lg h-52 flex flex-col p-4 ${
          thema === "light" && "bg-white"
        }  ${thema === "dark" && "bg-[#515151]"} ${
          thema === "dark" && "text-white"
        } ${thema === "dark" && "text-dark"}`}
      >
        <div className="bg-purpleBg text-white  w-fit p-2 rounded-full">
          <AnalyticsIcon />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <span>Total Sales</span>
            <span className="text-xl md:text-2xl font-extrabold">$25,024</span>
          </div>
          <div className="progress z-10 relative w-[92px] h-[92px] rounded-full">
            <svg className="w-[7rem] h-[7rem]">
              <circle className="circle" cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="progress-number flex justify-center items-center absolute top-0 left-0  w-[92px] h-[92px]">
              68%
            </div>
          </div>
        </div>
        <small className="text-gray-300 mt-auto">Last 24 hours</small>
      </div>
      <div
        className={`shadow-lg duration-300 hover:shadow-none rounded-lg h-52 flex flex-col p-4 ${
          thema === "light" && "bg-white"
        }  ${thema === "dark" && "bg-[#515151]"} ${
          thema === "dark" && "text-white"
        } ${thema === "dark" && "text-dark"}`}
      >
        <div className="bg-red-400 text-white  w-fit p-2 rounded-full">
          <BarChartIcon />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <span>Total Sales</span>
            <span className="text-xl md:text-2xl font-extrabold">$25,024</span>
          </div>
          <div className="progress-2 relative w-[92px] h-[92px] rounded-full">
            <svg className="w-[7rem] h-[7rem]">
              <circle className="circle" cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="progress-number flex justify-center items-center absolute top-0 left-0  w-[92px] h-[92px]">
              58%
            </div>
          </div>
        </div>
        <small className="text-gray-300 mt-auto">Last 24 hours</small>
      </div>
      <div
        className={`shadow-lg duration-300 hover:shadow-none rounded-lg h-52 flex flex-col p-4 ${
          thema === "light" && "bg-white"
        }  ${thema === "dark" && "bg-[#515151]"} ${
          thema === "dark" && "text-white"
        } ${thema === "dark" && "text-dark"}`}
      >
        <div className="bg-green-400 text-white  w-fit p-2 rounded-full">
          <MovingIcon />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <span>Total Sales</span>
            <span className="text-xl md:text-2xl font-extrabold">$25,024</span>
          </div>
          <div className="progress-3 relative w-[92px] h-[92px] rounded-full">
            <svg className="w-[7rem] h-[7rem]">
              <circle className="circle" cx="38" cy="38" r="36"></circle>
            </svg>
            <div className="progress-number flex justify-center items-center absolute top-0 left-0  w-[92px] h-[92px]">
              88%
            </div>
          </div>
        </div>
        <small className="text-gray-300 mt-auto">Last 24 hours</small>
      </div>
    </div>
  );
};

export default Cards;
