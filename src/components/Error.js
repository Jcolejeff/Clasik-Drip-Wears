import React from "react";
import styled from "styled-components";
const Error = () => {
	return (
		<Wrapper className="section section-center">
			<h2>There was an error </h2>
			<p>please check your network or refresh the page</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	text-align: center;
	margin-top: 4rem;
	p {
		font-size: 1.5rem;
	}
`;

export default Error;
