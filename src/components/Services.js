import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
	return (
		<Wrapper>
			<div className="section-center">
				<article className="header">
					<h3>
						Why choose Us? <br />
						lets find Out
					</h3>
				</article>
				<div className="services-center">
					{services.map((service) => {
						const { id, icon, title, text } = service;
						return (
							<article key={id} className="service">
								<span className="icon">{icon}</span>
								<h4>{title}</h4>
								<p>{text}</p>
							</article>
						);
					})}
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding: 5rem 0;
	background: var(--clr-primary-9);
	.services-center {
		/* grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		gap: 2.5rem;
		display: grid; */
		margin-top: 1.5rem;
	}
	h3,
	h4 {
		color: var(--clr-primary-1);
	}

	.header h3 {
		text-align: center;
	}

	.service {
		background: var(--clr-white);
		margin-inline: auto;
		text-align: center;
		padding: 2.5rem 2rem;
		max-width: 65rem;
		border-radius: var(--radius);

		p {
			color: var(--clr-primary-2);
			font-size: 1.4rem;
		}
	}
	span {
		width: 4rem;
		height: 4rem;
		display: grid;
		margin: 0 auto;
		place-items: center;
		margin-bottom: 1rem;
		border-radius: 50%;
		background: var(--clr-primary-10);
		color: var(--clr-primary-1);
		svg {
			font-size: 2rem;
		}
	}

	/* @media (min-width: 576px) {
		.services-center {
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		}
	} */
`;
export default Services;
