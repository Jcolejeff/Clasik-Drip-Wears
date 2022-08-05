import React from "react";
import styled from "styled-components";
import { PageHero, Paystack } from "../components";

// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
	const { cart } = useCartContext();

	return (
		<main>
			<PageHero title="checkout"></PageHero>
			<Wrapper className="page-100">
				{cart.length < 1 ? (
					<div className="empty">
						<h3>your cart is empty</h3>
						<Link to="/products" className="btn">
							fill it{" "}
						</Link>
					</div>
				) : (
					<Paystack></Paystack>
				)}
			</Wrapper>
		</main>
	);
};
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	.empty {
		text-align: center;
	}
`;
export default CheckoutPage;
