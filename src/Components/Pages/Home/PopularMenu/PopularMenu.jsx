import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-5">
        {menu.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center mb-5">
        <button className="btn btn-outline">View All Menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;
