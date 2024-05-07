import { Helmet } from "react-helmet-async";
import MiddleCall from "../../MiddleCall/MiddleCall";
import MiddleSlide from "../Shared/MiddleSlide/MiddleSlide";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";
import img from "../../../assets/home/chef-service.jpg";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <MiddleSlide
        img={img}
        title={"Bistro Boss"}
        bio={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      ></MiddleSlide>
      <PopularMenu> </PopularMenu>
      <MiddleCall></MiddleCall>
      <Card></Card>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
