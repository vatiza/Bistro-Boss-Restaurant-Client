import MiddleSlide from "../Shared/MiddleSlide/MiddleSlide";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <MiddleSlide></MiddleSlide>
      <PopularMenu> </PopularMenu>
    </div>
  );
};

export default Home;
