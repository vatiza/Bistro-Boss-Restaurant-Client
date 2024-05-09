import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessetImg from "../../../assets/menu/dessert-bg.jpeg";
import pizaaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import Cover from "../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"OUR MENU"}
        bio={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        heading={"---Don't miss---"}
        subHeading={"TODAY'S OFFER  "}
      ></SectionTitle>
      {/* offered data */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessets data */}
      <MenuCategory
        items={desserts}
        img={dessetImg}
        title={"dessert"}
        bio={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,  "
        }
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory
        items={pizza}
        img={pizaaImg}
        title={"pizza"}
        bio={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,  "
        }
      ></MenuCategory>
      {/* salads data */}
      <MenuCategory
        items={salad}
        img={saladImg}
        title={"salads"}
        bio={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,  "
        }
      ></MenuCategory>
      {/* soup data */}

      <MenuCategory
        items={soup}
        img={soupImg}
        title={"soups"}
        bio={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,  "
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
