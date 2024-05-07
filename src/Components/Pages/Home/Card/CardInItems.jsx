const CardInItems = ({ items }) => {
  const { name, image, recipe,  } = items;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="">
        <img src={image} alt="salad" className="" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline uppercase">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default CardInItems;
