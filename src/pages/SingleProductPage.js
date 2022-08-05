import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Fade } from "react-awesome-reveal";

import {
	Loading,
	Error,
	ProductImages,
	AddToCart,
	PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		fetchSingleProduct,
		single_product_loading: loading,
		single_product_error: error,
		single_product: product,
	} = useProductsContext();

	useEffect(() => {
		fetchSingleProduct(`${url}${id}?populate=*`);
		// eslint-disable-next-line
	}, [id]);

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				navigate("/");
			}, 3000);
		}
		// eslint-disable-next-line
	}, [error]);
	if (loading) {
		return (
			<div
				style={{
					border: "1px solid #fff",
					display: "block",
					lineHeight: 3,
					marginInline: "auto",
					width: "90%",
				}}
			>
				<Skeleton count={1} height="80vh" highlightColor="hsl(205, 85%, 87%)" />
				;
			</div>
		);
	}
	if (error) {
		return <Error />;
	}

	const { name, price, description, brand, images, stock, id: sku } = product;

	// add size to api
	return (
		<Wrapper>
			<PageHero title={name} product />
			<Fade top triggerOnce={true}>
				<div className="section section-center page">
					<Link to="/products" className="btn">
						back to products
					</Link>
					<div className="product-center">
						<ProductImages images={images}></ProductImages>
						<section className="content">
							<h2>{name}</h2>
							<h4 className="price">NGN {price}</h4>
							<ReactMarkdown className="description">
								{description}
							</ReactMarkdown>
							<p className="info">
								<span>Available :</span>{" "}
								{stock > 0 ? "In Stock" : "Out of Stock"}
							</p>
							<p className="info">
								<span>SKU :</span>
								{sku}
							</p>
							<p className="info">
								<span>Brand :</span>
								{brand}
							</p>
							<hr />
							{stock > 0 && <AddToCart product={product}></AddToCart>}
						</section>
					</div>
				</div>
			</Fade>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	.product-center {
		display: grid;
		gap: 4rem;
		margin-top: 2rem;
	}
	.price {
		color: var(--clr-primary-5);
	}
	.desc {
		line-height: 2;
		max-width: 45em;
	}
	.info {
		text-transform: capitalize;
		width: 300px;
		display: grid;
		grid-template-columns: 125px 1fr;
		span {
			font-weight: 700;
		}
	}

	@media (min-width: 992px) {
		.product-center {
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
		.price {
			font-size: 1.25rem;
		}
	}
`;

export default SingleProductPage;
