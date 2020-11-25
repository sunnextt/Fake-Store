import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
function PaypalButton(props) {
  const [sdkReady, setSdkReady] = useState(false);

const clientId =
  "AU7AkriK7Y1Xx3O3egVdHzWvNdEYYuFCnE3v1_OynoROpvWIZNUMcuQNYBcHOkadb2ST1nWk4LZEs6Vi";

  const addPaypalSdk = async () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  const createOrder = (actions) =>
    actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: props.amount,
          },
        },
      ],
    });

  const onApprove = (data, actions) =>
    actions.order
      .capture()
      .then((details) => props.onSuccess(data, details))
      .catch((err) => console.log(err));

  useEffect(() => {
    if (!window.paypal) {
      addPaypalSdk();
    }
    return () => {
      //
    };
  }, []);

  if (!sdkReady) {
    return <div>Loading...</div>;
  }

  const Button = window.paypal.Buttons.driver("react", { React, ReactDOM });

  return (
    <Button
      {...props}
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}

export default PaypalButton;
