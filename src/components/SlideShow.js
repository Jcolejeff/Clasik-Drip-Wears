import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import Error from "./Error";
import Loading from "./Loading";
import { Slide } from "react-slideshow-image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
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
		return <Loading></Loading>;
	}
	if (error) {
		return <Error></Error>;
	}
	return (
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
	);
};
const Wrapper = styled.section`
	padding: 1rem;

	margin: 2rem auto;
	@media (min-width: 768px) {
		margin-block-start: 7rem;

		width: 80%;
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
