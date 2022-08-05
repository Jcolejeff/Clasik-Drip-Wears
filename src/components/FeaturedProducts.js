import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { Slide } from "react-awesome-reveal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Fade } from "react-awesome-reveal";

const FeaturedProducts = () => {
	const {
		products_loading: loading,
		products_error: error,
		featured_products: featured,
	} = useProductsContext();
	if (loading) {
		return (
			<SkeletonWrapper>
				<Skeleton count={1} height="80vh" highlightColor="hsl(205, 85%, 87%)" />
				;
			</SkeletonWrapper>
		);
	}
	if (error) {
		return <Error></Error>;
	}
	return (
		<Wrapper className="section">
			<Fade triggerOnce={true}>
				<div className="title">
					<h2> Featured products</h2>
					<div className="underline"></div>
				</div>
				<div className="section-center featured">
					<Slide triggerOnce={true} direction="right">
						{featured
							.map((product) => {
								return <Product key={product.id} {...product}></Product>;
							})
							.slice(0, 7)}
					</Slide>
				</div>
				<Link to="/products" className="btn">
					all products
				</Link>
			</Fade>
		</Wrapper>
	);
};

const SkeletonWrapper = styled.div`
	display: block;
	margin-inline: auto;
	width: 90%;
	line-height: 3;
	@media (min-width: 40rem) {
		margin-top: 8rem;
	}
`;
const Wrapper = styled.section`
	background: var(--clr-grey-10);

	@media (min-width: 768px) {
		margin-block-start: 10rem;
	}

	.featured {
		margin: 1rem auto;
		display: grid;
		gap: 2.5rem;
		img {
			height: 225px;
		}
	}
	.btn {
		display: block;
		width: 148px;
		margin: 0 auto;
		margin-top: 3rem;
		text-align: center;
	}
	@media (min-width: 576px) {
		.featured {
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		}
	}
`;

export default FeaturedProducts;
