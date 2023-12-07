import { useDispatch, useSelector } from "react-redux";
import { addItem, addItemName, addItemPrice } from "../store";

const Add = () => {
  const dispatch = useDispatch();

  const {itemName, itemPrice} = useSelector((state) => state.form);

  const handleChangeName = (e) => {
    dispatch(addItemName(e.target.value));
  };
  const handleChangePrice = (e) => {
    const price = parseInt(e.target.value) || 0;
    dispatch(addItemPrice(price));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addItem({
      itemName,
      itemPrice,
    }))
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4">
          <label className="font-bold text-cyan-800">Item Name: </label>
          <input
          required
          value={itemName}
            onChange={handleChangeName}
            className="border border-gray-400 w-2/5 rounded"
          />
        </div>

        <div className="flex gap-4">
          <label className="font-bold text-cyan-800">Item Price: </label>
          <input
          required
          value={itemPrice || ""}
            type="number"
            onChange={handleChangePrice}
            className="border border-gray-400 w-2/5 rounded"
          />
        </div>

        <div className="gap-4 m-4">
          <button className="px-4 bg-cyan-700 text-white rounded shadow-sm text-sm">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Add;
