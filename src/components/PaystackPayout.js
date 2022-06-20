import React from "react";
import { useHistory } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import styled from "styled-components";

function PaystackPayout() {
	const [address, setAddress] = React.useState("");
	const [name, setName] = React.useState("");
	const [phone, setPhone] = React.useState("");

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
		firstname: name,
		metadata: {
			cart_id: 398,
			custom_fields: [
				{
					display_name: "shipping address",
					variable_name: "shipping address",
					value: address,
				},
				{
					display_name: "Phone Number",
					variable_name: "Phone Number",
					value: phone,
				},
				{
					display_name: "Name",
					variable_name: "Name",
					value: name,
				},
				{
					display_name: "Cart Items",
					variable_name: "cart_items",
					value: cart,
				},
			],
		},
		amount: (total_amount + shipping_fee) * 100,
		publicKey: "pk_test_bb903e670173c21bb2617b96bb39a681e52ccf1c",
	};
	// you can call this function anything
	const handlePaystackCloseAction = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.

		console.log("closed");
	};

	const componentProps = {
		...config,
		text: "Pay Now",
		onSuccess: (reference) => handlePaystackSuccessAction(reference),
		onClose: handlePaystackCloseAction,
	};

	return (
		<Wrapper className="page-100">
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<StyledPaystackPayout>
					<div className="form-control">
						<label htmlFor="name">Name : </label>
						<input
							type="text"
							required
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="address">Address: </label>
						<input
							required
							type="text"
							id="address"
							name="address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="phone">Phone: </label>
						<input
							required
							type="text"
							id="phone"
							name="phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="email">Email : </label>
						<input
							type="email"
							id="email"
							name="email"
							value={myUser ? myUser.email : null}
						/>
					</div>
				</StyledPaystackPayout>
			</form>
			<PaystackButton className="btn" custom_fields {...componentProps} />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledPaystackPayout = styled.div`
	.form {
		background: var(--clr-white);
		max-width: var(--fixed-width);
		margin: 0 auto;
		margin-bottom: 4rem;
		padding: 1rem 2rem;
		border-radius: var(--radius);
	}
	.form input {
		background: var(--clr-grey-10);
		border-color: transparent;
		border-radius: var(--radius);
		padding: 0.25rem 0.5rem;
	}
	.form-control {
		margin: 0.5rem 0;
		display: grid;
		grid-template-columns: 100px 1fr;
		align-items: center;
	}
	.form button,
	.btn {
		display: inline-block;
		background: var(--clr-black);
		color: var(--clr-white);
		border-color: transparent;
		margin-top: 1rem;
		letter-spacing: var(--spacing);
		padding: 0.15rem 0.25rem;
		text-transform: capitalize;
		border-radius: var(--radius);
		cursor: pointer;
	}
`;
export default PaystackPayout;
