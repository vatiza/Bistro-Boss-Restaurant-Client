const MiddleSlide = ({ img, title, bio }) => {
  return (
    <div className="mt-10 relative ">
      <img src={img} alt="" />
      <div className="w-[1000px] h-[222px] inset-24  absolute justify-center flex px-44 bg-white">
        <div className="text-center flex flex-col justify-center text-black">
          <h1 className="font-bold text-xl uppercase">{title}</h1>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleSlide;
