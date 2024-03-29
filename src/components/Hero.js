import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import { Slide } from "react-awesome-reveal";

const Hero = () => {
	return (
		<Wrapper className="section-center">
			<article className="content">
				<h1>
					Choose Quality <br></br>
					Drip Drifferent
				</h1>

				<p>
					Hi there <span>👋</span>
					<p>Welcome to clahsikdrip wears </p>{" "}
					<p>Enjoy shopping with us! 🛍️🛒 </p>
				</p>
				<Link to="/products" className="btn hero-btn">
					shop now
				</Link>
			</article>
			<article className="mobile-image">
				<Slide>
					<img
						src="https://res.cloudinary.com/clasikdrip/image/upload/v1655739072/ben_iwara_wgi_Rht_Bc_N_Ig_unsplash_2_95f612edb8.jpg"
						alt=""
					/>
				</Slide>
			</article>
			<article className="img-container">
				<img src={heroBcg} alt="table" className="main-img" />
				<img
					src="https://res.cloudinary.com/clasikdrip/image/upload/v1655739072/thumbnail_ben_iwara_wgi_Rht_Bc_N_Ig_unsplash_2_95f612edb8.jpg?width=4372&height=2478"
					alt="second image"
					className="accent-img"
				/>
			</article>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	min-height: 60vh;
	display: grid;
	place-items: center;
	text-align: center;

	.mobile-image {
		margin-block: 3rem;
		width: 98%;
		img {
			width: 100%;
			box-shadow: var(--dark-shadow);
			border-radius: var(--radius);
		}
	}
	h1 {
		font-size: 2rem;
	}
	.img-container {
		display: none;
	}
	span {
		font-size: 2rem;

		@media (min-width: 50rem) {
			font-size: 4rem;
		}
	}
	p {
		max-width: 45em;
		color: var(--clr-grey-5);
		font-size: 1.2rem;
	}
	@media (min-width: 992px) {
		.mobile-image {
			display: none;
		}
		height: calc(100vh - 5rem);
		grid-template-columns: 1fr 1fr;
		gap: 8rem;
		h1 {
			margin-bottom: 2rem;
		}
		p {
			font-size: 1.7rem;
		}
		.hero-btn {
			padding: 0.75rem 1.5rem;
			font-size: 1rem;
		}
		.img-container {
			display: block;
			position: relative;
		}
		.main-img {
			width: 100%;
			height: 550px;
			position: relative;
			border-radius: var(--radius);
			display: block;
			object-fit: cover;
		}
		.accent-img {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 250px;
			transform: translateX(-50%);
			border-radius: var(--radius);
		}
		.img-container::before {
			content: "";
			position: absolute;
			width: 10%;
			height: 80%;
			background: var(--clr-primary-9);
			bottom: 0%;
			left: -8%;
			border-radius: var(--radius);
		}
	}
`;

export default Hero;
