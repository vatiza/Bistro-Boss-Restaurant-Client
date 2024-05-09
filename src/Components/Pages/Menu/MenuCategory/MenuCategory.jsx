import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, img, title, bio }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} bio={bio}></Cover>}
      <div className="grid grid-cols-2 gap-5 mt-10">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
