import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY_PK);

const Payments = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payments;
