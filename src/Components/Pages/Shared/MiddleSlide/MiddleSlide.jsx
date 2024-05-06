import img from "../../../../assets/home/chef-service.jpg";
import MiddleBio from "./MiddleBio";
const MiddleSlide = () => {
  return (
    <div className="mt-10 relative ">
      <img src={img} alt="" />
      <div className="w-[1000px] h-[222px] inset-24  absolute justify-center flex px-44 bg-white">
        <MiddleBio
          bio={"Bistro Boss"}
          shortBio={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
          }
        ></MiddleBio>
      </div>
    </div>
  );
};

export default MiddleSlide;
