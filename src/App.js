import Add from "./components/Add";
import List from "./components/List";
import TotalCost from "./components/TotalCost";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-6">
        
      <h1 className="col-span-6 text-4xl text-center font-bold text-red-400">
        Shopping Cart
      </h1>

      <div className="col-span-6 p-4 ">
        <Search />
      </div>

      <div className="col-span-6 p-4 bg-slate-50 rounded shadow">
        <Add />
      </div>

      <div className="col-span-4  p-4 bg-slate-50 rounded shadow-md">
        <List />
      </div>

      <div className="col-span-2 p-4 bg-slate-100 rounded shadow-md">
        <TotalCost />
      </div>
    </div>
  );
};

export default App;
