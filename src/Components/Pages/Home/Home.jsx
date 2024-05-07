import MiddleCall from "../../MiddleCall/MiddleCall";
import MiddleSlide from "../Shared/MiddleSlide/MiddleSlide";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <MiddleSlide></MiddleSlide>
      <PopularMenu> </PopularMenu>
      <MiddleCall></MiddleCall>
      <Card></Card>
    </div>
  );
};

export default Home;
