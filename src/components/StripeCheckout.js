import React from "react";
import { useHistory } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

function App() {
	const { clearCart, cart, total_amount, shipping_fee } = useCartContext();
	const { myUser } = useUserContext();
	console.log(myUser);
	const history = useHistory();
	// you can call this function anything
	const handlePaystackSuccessAction = (reference) => {
		// Implementation for whatever you want to do with reference and after success call.
		clearCart();
		history.push("/products");
		console.log(reference);
	};
	const config = {
		reference: new Date().getTime().toString(),
		email: `${myUser ? myUser.email : null}`,
		firstname: "jef",
		lastname: "eno",
		metadata: {
			cart_id: 398,
			custom_fields: [
				{
					display_name: "shipping address",
					variable_name: "shipping address",
					value: "no4  owdkj w d ncn",
				},
				{
					display_name: "Cart Items",
					variable_name: "cart_items",
					value: cart,
				},
			],
		},
		amount: total_amount + shipping_fee,
		publicKey: "pk_test_bb903e670173c21bb2617b96bb39a681e52ccf1c",
	};
	// you can call this function anything
	const handlePaystackCloseAction = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.

		console.log("closed");
	};

	const componentProps = {
		...config,
		text: "Paystack Button Implementation",
		onSuccess: (reference) => handlePaystackSuccessAction(reference),
		onClose: handlePaystackCloseAction,
	};

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<PaystackButton className="paystack" custom_fields {...componentProps} />
		</div>
	);
}

export default App;
