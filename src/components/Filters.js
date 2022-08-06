import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
	const {
		filters: {
			text,
			category,
			brand,
			color,
			min_price,
			max_price,
			shipping,
			price,
		},
		updateFilters,
		clearFilters,
		all_products,
	} = useFilterContext();

	const categories = getUniqueValues(all_products, "category");
	const brands = getUniqueValues(all_products, "brand");
	const colors = getUniqueValues(all_products, "colors");

	return (
		<Wrapper>
			<div className="content">
				<form onSubmit={(e) => e.preventDefault()}>
					<section className="select">
						{/* categories */}
						<div className="form-control">
							<h5>Categories</h5>
							<select
								name="category"
								value={category}
								onChange={updateFilters}
								className="company"
							>
								{categories.map((item, index) => {
									return (
										<option key={index} value={item}>
											{item.toUpperCase()}
										</option>
									);
								})}
							</select>
						</div>
						{/* end of  categories */}
						{/* brands */}
						<div className="form-control">
							<h5>Brands</h5>
							<select
								name="brand"
								value={brand}
								onChange={updateFilters}
								className="company"
							>
								{brands.map((item, index) => {
									return (
										<option key={index} value={item}>
											{item.toUpperCase()}
										</option>
									);
								})}
							</select>
						</div>
						{/* end of brands */}
						{/* colors*/}
						<div className="form-control">
							<h5>Colors</h5>
							<select
								name="color"
								value={color}
								onChange={updateFilters}
								className="company"
							>
								{colors.map((item, index) => {
									return (
										<option key={index} value={item}>
											{item.toUpperCase()}
										</option>
									);
								})}
							</select>
						</div>
						{/* end of colors */}

						{/* price */}
						<div className="form-control">
							<p className="price">{formatPrice(price)}</p>
							<input
								type="range"
								name="price"
								min={min_price}
								max={max_price}
								value={price}
								onChange={updateFilters}
							/>
						</div>
						{/* end of price */}
					</section>
					{/* search input */}
					<div className="form-control">
						<input
							type="text"
							name="text"
							placeholder="Search"
							className="input"
							value={text}
							onChange={updateFilters}
						/>
						<label htmlFor="email" className="label">
							Search
						</label>
					</div>
					{/* end of search input */}
					{/* shipping */}
					<div className="form-control shipping">
						<label htmlFor="shipping">free shipping</label>
						<input
							type="checkbox"
							name="shipping"
							id="shipping"
							onChange={updateFilters}
							checked={shipping}
						/>
					</div>
					{/* end of shipping */}
				</form>
				<button type="button" onClick={clearFilters} className="btn">
					clear filters
				</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.form-control {
		/* display: flex; */
	}
	.select {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}
	.input {
		font-size: 1.3rem;
		font-family: inherit;
		color: inherit;
		padding: 0.5rem;
		border-radius: 6px;
		background-color: var(--clr-grey-10);
		border: none;
		border-bottom: 3px solid transparent;
		width: 100%;
		display: block;
		transition: all 0.3s;
		margin-top: 0.5rem;

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

	.company {
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		padding: 0.25rem;
	}

	.price {
		margin-top: 0.25rem;
	}
	.shipping {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		text-transform: capitalize;
		column-gap: 0.5rem;
		font-size: 1rem;
		margin-left: 0.4rem;
		margin-top: -1rem;
	}

	.btn {
		text-transform: capitalize;
		display: block;
		margin-top: 1rem;
		@media (max-width: 768px) {
			margin-inline: auto;
		}
	}
	@media (min-width: 768px) {
		.content {
			position: sticky;
			top: 1rem;
		}
	}
`;

export default Filters;
