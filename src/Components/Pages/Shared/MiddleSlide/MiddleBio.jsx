const MiddleBio = ({ bio, shortBio }) => {
  return (
    <div className="text-center my-auto text-black">
      <h1 className="font-bold text-xl uppercase ">{bio}</h1>
      <p>{shortBio}</p>
    </div>
  );
};

export default MiddleBio;
