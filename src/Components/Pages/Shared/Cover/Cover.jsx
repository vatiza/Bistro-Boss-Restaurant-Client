const Cover = ({ img, title, bio }) => {
  return (
    <div className=" relative ">
      <img src={img} alt="" />
      <div className="w-[1000px] h-[222px] inset-32 mt-16 absolute justify-center flex px-44 bg-opacity-60 bg-black">
        <div className="text-center flex flex-col justify-center text-white">
          <h1 className="font-bold text-xl uppercase ">{title}</h1>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
