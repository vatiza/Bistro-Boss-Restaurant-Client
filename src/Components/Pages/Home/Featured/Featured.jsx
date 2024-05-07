import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured_items text-white pt-8 bg-fixed">
      <SectionTitle
        heading={"---Check it out---"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 py-8 px-36 gap-5 text-white">
        <div>
          <img className="w-[640px]" src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 10,2025</p>
          <p>WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque odit
            error quos ducimus eligendi quae, at, eos pariatur blanditiis
            tenetur nam minima quaerat ut molestiae porro. Laboriosam quaerat
            earum ducimus fugiat exercitationem sed voluptates?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
