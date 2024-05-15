import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
//todo: provide publishable (key)
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY_PK);

const Payments = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payments;
