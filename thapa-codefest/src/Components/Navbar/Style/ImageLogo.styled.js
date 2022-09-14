import styled from "styled-components";
export const Image = styled.img`
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	left: 30px;
	height: 38px;
	width: auto;
	transition: all 0.4s;
	&:hover {
		transition: all 0.4s;
		cursor: pointer;
		scale: 1.04;
	}
`;
