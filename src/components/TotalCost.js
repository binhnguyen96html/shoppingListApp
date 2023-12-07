import { useSelector } from "react-redux";

const TotalCost = () => {
  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const totalPrice = useSelector(
    ({ form, items: { searchTerm, itemsData } }) => {
      const updatedItems = itemsData.filter((item) => {
        return item.itemName.toLowerCase().includes(searchTerm.toLowerCase());
      });
      return updatedItems;
    }
  ).reduce((acc, item) => {
    return acc + item.itemPrice;
  }, 0);

  return (
    <div className="text-center mt-4 text-2xl">
      <h2 className="text-xl text-cyan-800">Total</h2>

      <p className="font-bold mt-4 ">{dollarUS.format(totalPrice)}</p>
    </div>
  );
};

export default TotalCost;
