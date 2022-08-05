import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Fade } from "react-awesome-reveal";

const AuthWrapper = ({ children }) => {
	const { isLoading, error } = useAuth0();
	if (isLoading) {
		return (
			<Wrapper>
				<Skeleton
					count={1}
					height="100vh"
					highlightColor="hsl(205, 85%, 87%)"
				/>
				;
			</Wrapper>
		);
	}
	if (error) {
		return (
			<Wrapper>
				<h1>Error: {error.message}</h1>
			</Wrapper>
		);
	}

	return <Fade>{children}</Fade>;
};

const Wrapper = styled.section`
	min-height: 100vh;
	display: block;
	margin-inline: auto;
	width: 96%;
	line-height: 3;
`;

export default AuthWrapper;
