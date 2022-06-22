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
		publicKey: "pk_live_774b70f49a701559581f3a6ac61109a693eaf284",
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
		<Wrapper>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			></form>
			<Section>
				<h4>Please check your Email for shipping details</h4>
				<div className="group">
					<input
						type="text"
						className="input"
						placeholder="
						Full name"
						id="name"
						name="name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<label htmlFor="name" className="label">
						Full name
					</label>
				</div>
				<div className="group">
					<input
						type="text"
						className="input"
						placeholder="Shipping Address"
						id="address"
						name="address"
						required
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
					<label htmlFor="address" className="label">
						Shipping Address
					</label>
				</div>
				<div className="group">
					<input
						type="text"
						className="input"
						placeholder="Phone Number"
						id="phone"
						name="phone"
						required
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
					<label htmlFor="phone" className="label">
						Phone Number
					</label>
				</div>
				<div className="group">
					<input
						type="email"
						className="input"
						placeholder="Email address"
						id="email"
						required
						name="email"
						value={myUser ? myUser.email : null}
					/>
					<label htmlFor="email" className="label">
						Email address
					</label>
				</div>
			</Section>
			<PaystackButton className="btn" custom_fields {...componentProps} />
		</Wrapper>
	);
}
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: var(--clr-primary-10);
	padding: 3rem;
	width: 100%;
	border-radius: 7px;
	h4 {
		width: 80%;
		margin-block-end: 1rem;
	}

	&group:not(:last-child) {
		margin-bottom: 2rem;
	}

	.input-error {
		border-bottom: 3px solid red;
	}
	.errorMsg {
		font-size: 10px;
		color: red;
	}
	.input {
		font-size: 1.3rem;
		font-family: inherit;
		color: inherit;
		padding: 1rem 1rem;
		border-radius: 6px;
		background-color: var(--clr-primary-7);
		border: none;
		border-bottom: 3px solid transparent;
		width: 100%;
		display: block;
		transition: all 0.3s;

		&:focus {
			outline: none;
			box-shadow: 0 0.3rem 0.5rem black;
			border-bottom: 3px solid var(--clr-primary-10);
			.input-error {
				border-bottom: 3px solid red;
			}
		}

		&::-webkit-input-placeholder {
			color: black;
		}
	}
	.input-error {
		border-bottom: 3px solid red;
	}
	.label {
		font-size: 1rem;
		font-weight: 700;
		margin-left: 2rem;
		margin-top: 0.9rem;
		margin-bottom: 1rem;
		display: block;
		transition: all 0.3s;
	}

	.input:placeholder-shown + .label {
		opacity: 0;
		visibility: hidden;
		transform: translateY(-4rem);
	}
`;

export default PaystackPayout;
