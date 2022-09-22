import { useState } from "react";
import ContentBody from "./components/ContentBody";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { MainContext } from "./context";

function App() {
  const [navShow, setNavShow] = useState("hidden");
  const [thema, setThema] = useState("light");
  const data = {
    navShow,
    setNavShow,
    thema,
    setThema,
  };
  return (
    <MainContext.Provider value={data}>
      <div
        className={`max-w-[1440px] mx-auto flex  ${
          thema === "light" && "bg-lightModeBg"
        }  ${thema === "dark" && "bg-darkModeBg"} relative z-50 min-h-screen`}
      >
        <div
          className={`absolute ${navShow === "hidden" && "-left-[300px]"} ${
            navShow === "show" && "left-0"
          }  top-0 xl:relative xl:left-0 duration-300`}
        >
          <Navbar />
        </div>
        <div className="w-full h-full">
          <Header />
          <ContentBody />
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
