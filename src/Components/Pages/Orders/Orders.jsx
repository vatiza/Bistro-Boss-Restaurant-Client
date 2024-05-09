import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderimg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../Shared/Cover/Cover";
import OrdersTabs from "./OrdersTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Orders = () => {
  const categories = ["salads", "pizza", "soups", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
        <Helmet>
            <title>Bistro Boss| Orders Food </title>
        </Helmet>
      <Cover
        img={orderimg}
        title={"OUR SHOP"}
        bio={"Would you like to try a dish?"}
      ></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="text-center m-5">
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizza </Tab>
            <Tab>Soups </Tab>
            <Tab>Desserts </Tab>
            <Tab>Drinks </Tab>
          </TabList>
        </div>
        <TabPanel>
          <OrdersTabs items={salads}></OrdersTabs>
        </TabPanel>
        <TabPanel>
          <OrdersTabs items={pizza}></OrdersTabs>
        </TabPanel>
        <TabPanel>
          <OrdersTabs items={soups}></OrdersTabs>
        </TabPanel>
        <TabPanel>
          <OrdersTabs items={desserts}></OrdersTabs>
        </TabPanel>
        <TabPanel>
          <OrdersTabs items={drinks}></OrdersTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Orders;
