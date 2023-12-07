import { useDispatch, useSelector } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { removeItem } from "../store/slice/itemsSlice";

const List = () => {
  const dispatch = useDispatch();

  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const { items, name } = useSelector(
    ({ form, items: { searchTerm, itemsData } }) => {
      const updatedItems = itemsData.filter((item) => {
        return item.itemName.toLowerCase().includes(searchTerm.toLowerCase());
      });

      return {
        items: updatedItems,
        name: form.itemName,
      };
    }
  );

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const renderedItems = items.map((item) => {
    const bold =
      name && item.itemName.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={item.itemId} className="p-2">
        <div className="flex justify-between">
          <div className={`flex justify-between w-4/5 ${bold && "font-bold"}`}>
            <p>{item.itemName}</p>
            <p>{dollarUS.format(item.itemPrice)}</p>
          </div>

          <div>
            <TiDeleteOutline onClick={() => handleDelete(item.itemId)} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <h2 className="text-xl text-cyan-800">Shopping List</h2>
      {renderedItems}
    </>
  );
};

export default List;
