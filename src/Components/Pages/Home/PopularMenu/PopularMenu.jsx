import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-5">
        {popular.map((item) => (
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
