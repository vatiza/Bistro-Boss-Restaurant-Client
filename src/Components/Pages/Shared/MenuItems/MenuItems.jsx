const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex gap-2 mx-10 space-x-2 mb-7">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[90px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="font-bold text-xl">{name}</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-warning">${price}</p>
    </div>
  );
};

export default MenuItems;
