const FoodCards = ({ items }) => {
  const { name, recipe, image, price } = items;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-5 mt-5 py-2 px-3">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 border-b-4 border-orange-500 mt-4">
             Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
