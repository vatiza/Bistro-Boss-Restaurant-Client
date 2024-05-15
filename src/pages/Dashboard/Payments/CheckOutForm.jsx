import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const CheckOutForm = ({ price, cart }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProccessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const notify = () => toast.success(" Payment Success!");
  const notifyError = () => toast.error("Payment Not Success!.");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("[PaymentMethod]", paymentMethod);
    }
    setProccessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProccessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      //save payment information to server
      const paymentInfo = {
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
        status: "pending",
        price,
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),

        itemsNames: cart.map((item) => item.name),
      };
      axiosSecure.post("/payments", paymentInfo).then((res) => {
        console.log(res.data.insertResult.insertedId);
        if (res.data.insertResult.insertedId) {
          // display confitm
          notify();
        } else {
          notifyError();
        }
      });
    }
  };
  return (
    <>
      <form
        className="w-2/4 mt-5 flex flex-col mx-auto"
        onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-warning mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-600 flex flex-col text-xl items-center ">
          {cardError}
        </p>
      )}
      {transactionId && (
        <p className="text-green-600">
          Transaction Complete with Transaction ID:{transactionId}
        </p>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default CheckOutForm;
