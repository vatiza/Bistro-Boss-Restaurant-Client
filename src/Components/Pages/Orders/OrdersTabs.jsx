import FoodCards from "../../FoodCards/FoodCards";

const OrdersTabs = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 mx-10">
        {items.map((items) => (
          <FoodCards key={items._id} items={items}></FoodCards>
        ))}
      </div>
    </div>
  );
};

export default OrdersTabs;
