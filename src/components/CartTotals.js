import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
	const { total_amount, shipping_fee } = useCartContext();
	const { myUser, loginWithRedirect } = useUserContext();

	return (
		<Wrapper>
			<div>
				<article>
					<h5>
						Subtotal : <span>{formatPrice(total_amount)}</span>
					</h5>
					<p>
						shipping : <span>{formatPrice(shipping_fee)}</span>
						<h5>
							Total : <span>{formatPrice(total_amount + shipping_fee)}</span>
						</h5>
					</p>
				</article>
				{myUser ? (
					<Link to="/checkout" className="btn">
						Checkout
					</Link>
				) : (
					<button type="button" className="btn" onClick={loginWithRedirect}>
						login
					</button>
				)}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 3rem;
	display: flex;

	@media (max-width: 768px) {
		div {
			width: 100%;
		}
	}
	justify-content: center;
	article {
		border: 1px solid var(--clr-grey-8);
		border-radius: var(--radius);
		padding: 1.5rem 3rem;
	}
	h4,
	h5,
	p {
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: 0.5rem;
	}
	p {
		text-transform: capitalize;
	}
	h4 {
		margin-top: 2rem;
	}
	@media (min-width: 776px) {
	}
	.btn {
		width: 100%;
		margin-top: 1rem;
		text-align: center;
		font-weight: 700;
	}
`;

export default CartTotals;
