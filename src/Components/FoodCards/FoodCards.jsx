import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCarts from "../../hooks/useCarts";

const FoodCards = ({ items }) => {
  const { _id, name, recipe, image, price } = items;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCarts();

  const handleAddtoCart = (items) => {
    console.log(items);
    if (user && user.email) {
      const cartItem = {
        foodId: _id,
        name,
        recipe,
        image,
        price: parseFloat(price),
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //update cart number
            Swal.fire({
              title: "Good !",
              text: "Your Cart is Added!",
              icon: "success",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login",
        text: "You won't be Add to Cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <button
              onClick={() => handleAddtoCart(items)}
              className="btn btn-outline border-0 border-b-4 border-orange-500 mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
