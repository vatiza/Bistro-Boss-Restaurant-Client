import MiddleCall from "../../MiddleCall/MiddleCall";
import MiddleSlide from "../Shared/MiddleSlide/MiddleSlide";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <MiddleSlide></MiddleSlide>
      <PopularMenu> </PopularMenu>
      <MiddleCall></MiddleCall>
      <Card></Card>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
