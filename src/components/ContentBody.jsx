import Cards from "./Cards";
import Table from "./Table";
import TimeLine from "./TimeLine";
import { MainContext, useContext } from "../context";

const ContentBody = () => {
  const { thema } = useContext(MainContext);
  return (
    <div
      className={`flex flex-col sm:flex-row h-full ${
        thema === "light" && "bg-lightModeBg"
      }  ${thema === "dark" && "bg-darkModeBg"} ${
        thema === "dark" && "text-white"
      } ${thema === "dark" && "text-dark"} `}
    >
      <div className="sm:w-6/12 lg:w-8/12 px-4">
        <Cards />
        <Table />
      </div>
      <TimeLine />
    </div>
  );
};

export default ContentBody;
