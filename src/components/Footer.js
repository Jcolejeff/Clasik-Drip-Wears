import React from "react";
import styled from "styled-components";
import { Zoom, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { FaTwitter, FaMailBulk, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
	return (
		<Wrapper>
			<Slide>
				<section>
					<h3>Contact Us</h3>
					<h5>
						Email: <br />
						<a href="mailto:clahsikdrip@gmail.com">clahsikdrip@gmail.com</a>
					</h5>
					<h5>
						Phone: <br />
						<a href="tel:+2348033369900">+234 803 336 9900</a> <br />
					</h5>
					<h5>
						Whatsapp: <br />
						<a href="tel:+2348033369900">+234 803 336 9900</a>
					</h5>
				</section>

				<section className="page-links">
					<h3> links</h3>
					<Link to="/">Home</Link>
					<Link to="/products">Products</Link>
					<Link to="/about">About Us</Link>
				</section>
				<section className="links">
					<h5>
						&copy;{new Date().getFullYear()}
						<span> Clasik Drip Wears</span>
						<h5>All rights reserved</h5>
					</h5>
					<ul>
						<li>
							<a href="https://github.com">
								<FaWhatsapp />
							</a>
						</li>

						<li>
							<a href="https://www.linkedin.com">
								<FaInstagram />
							</a>
						</li>
						<li>
							<a href=" https://twitter.com">
								<FaTwitter />
							</a>
						</li>
						<li>
							<a href="mailto:ikkhjhhjshaklsj@gmail.com">
								<FaMailBulk />
							</a>
						</li>
					</ul>
				</section>
			</Slide>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	background: var(--clr-black);
	color: var(--clr-white);
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-inline: auto;
	margin-block-end: 1rem;
	margin-block-start: 2rem;
	width: 95vw;
	text-align: center;
	font-size: 0.8rem;
	font-weight: 600;
	gap: 2rem;

	box-shadow: var(--light-shadow);
	padding: 3.5rem;
	border-radius: 10px;
	.contact {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	a {
		color: var(--clr-primary-5);
	}
	.page-links {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.links {
		ul {
			display: flex;
			li {
				margin: 1.5rem;
				font-size: 1.4rem;
			}
		}
	}
	span {
		color: var(--clr-primary-5);
	}
	h5 {
		color: var(--clr-white);
		margin: 0.1rem;

		font-weight: 400;
		text-transform: none;
		line-height: 1.25;
	}
	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;
	}
`;

export default Footer;
