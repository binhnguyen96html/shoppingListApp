import { useSelector, useDispatch } from "react-redux";
import { clearSearchTermAction } from "../store";
import { doSearchTerm } from "../store";

const Search = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.items.searchTerm)

  const handleChangeTerm = (e) => {
    // console.log(doSearchTerm(e.target.value))
    dispatch(doSearchTerm(e.target.value))
  }

  const handleClearTerm = () => {
    // console.log(clearSearchTermAction())
    dispatch(clearSearchTermAction())
  }

  return (
    <div className="flex gap-4">
      <label className="1/5 font-bold text-cyan-800">Search Item: </label>
      <input 
      onChange={handleChangeTerm}
      type="input"
      value={searchTerm}
      className="border border-gray-400 w-3/5 rounded" />

      <button 
      onClick={handleClearTerm}
      className="px-4 bg-cyan-700 text-white rounded shadow-sm text-sm">
        Clear
      </button>
    </div>
  );
};

export default Search;
