import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import Error from "./Error";
import { Slide } from "react-slideshow-image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Fade } from "react-awesome-reveal";
const SlideShow = () => {
	const {
		slide,
		products_loading: loading,
		products_error: error,
	} = useProductsContext();
	const Images = slide.map((image) => {
		return image.images;
	});

	const data = Images.map((image) => {
		return image.data;
	});
	const images = data
		.map((image) => {
			return image[0].attributes.url;
		})
		.slice(0, 10);

	const slideImages = images.map((image) => {
		return { url: image };
	});

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
		<Fade triggerOnce={true}>
			<Wrapper className="slide-container">
				<Slide
					arrows={false}
					duration={2000}
					indicators={true}
					pauseOnHover={false}
					responsive={[{ breakpoint: 768, settings: { slidesToShow: 2 } }]}
					// prevArrow={<FiChevronLeft size="3rem" />}
					// nextArrow={<FiChevronRight size="3rem" />}
				>
					{slideImages.map((slideImage, index) => (
						<div className="each-slide" key={index}>
							<div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
						</div>
					))}
				</Slide>
			</Wrapper>
		</Fade>
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
	padding: 1rem;

	margin: 2rem auto;
	@media (min-width: 768px) {
		width: 98%;
	}
	.each-slide > div {
		display: flex;
		align-items: center;
		justify-content: center;
		background-size: cover;
		background-position: center;
		height: 50vh;
		border-radius: 0.5rem;
		background-position: center;
		@media (min-width: 768px) {
			background-repeat: no-repeat;
			height: 70vh;
		}
	}
`;

export default SlideShow;
