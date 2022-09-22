import { MainContext, useContext } from "../context";

const Table = () => {
  const { thema } = useContext(MainContext);
  return (
    <div className="py-4 mt-4 ">
      <h1 className="text-2xl font-extrabold mb-2 pl-3">Recent Orders</h1>

      <table
        className={` w-full rounded-xl select-none   ${
          thema === "light" && "bg-lightModeBg"
        }  ${thema === "dark" && "bg-darkModeBg"} ${
          thema === "dark" && "text-white"
        } ${thema === "dark" && "text-dark"}
         `}
      >
        <thead>
          <tr>
            <th className="py-2 hidden lg:block">Product Name</th>
            <th className="py-2 ">ID</th>
            <th className="py-2">Payment</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="border-b-2">
            <td className="py-2 hidden lg:block">Toldable mini Drone</td>
            <td className="py-2">85631</td>
            <td className="py-2">Due</td>
            <td className="py-2 text-yellow-400">Pending</td>
            <td className="py-2 hidden lg:block ">Details</td>
          </tr>
          <tr className="border-b-2">
            <td className="py-2 hidden lg:block">LARVENDER KF102 Drone</td>
            <td className="py-2">85641</td>
            <td className="py-2">Due</td>
            <td className="py-2 text-yellow-400">Pending</td>
            <td className="py-2 hidden lg:block ">Details</td>
          </tr>
          <tr className="border-b-2">
            <td className="py-2 hidden lg:block">Ruko Pro Drone</td>
            <td className="py-2">86631</td>
            <td className="py-2">Due</td>
            <td className="py-2 text-red-500">Declined</td>
            <td className="py-2 hidden lg:block ">Details</td>
          </tr>
          <tr className="border-b-2">
            <td className="py-2 hidden lg:block">Lozange mini Drone</td>
            <td className="py-2">87631</td>
            <td className="py-2">Due</td>
            <td className="py-2 text-yellow-400">Pending</td>
            <td className="py-2 hidden lg:block ">Details</td>
          </tr>
          <tr className="border-b-2 ">
            <td className="py-2 hidden lg:block">Lozange Pro Drone</td>
            <td className="py-2">85631</td>
            <td className="py-2">Due</td>
            <td className="py-2 text-red-500">Declined</td>
            <td className="py-2 hidden lg:block ">Details</td>
          </tr>
          <tr className="border-b-2 w-11/12">
            <td className="py-2 hidden lg:block">Toldable mini Pro Drone</td>
            <td className="py-2">86631</td>
            <td className="py-2">Due</td>
            <td className="py-2 text-yellow-400">Pending</td>
            <td className="py-2 hidden lg:block ">Details</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
