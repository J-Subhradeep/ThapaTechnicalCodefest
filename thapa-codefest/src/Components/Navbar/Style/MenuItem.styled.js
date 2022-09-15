import styled from "styled-components";
export const MenuItemWrapper = styled.div`
	/* background-color: green; */
	.inner-u {
		width: 100%;
		/* background-color: red; */
		padding: 5px;
		font-size: 15px;
		color: black;
		margin: 10px;
		font-weight: 500;
		display: flex;
		align-items: center;
		position: relative;
		&:hover {
			transition: all 0.5s;
			color: #7d7d7d;
			cursor: pointer;
			/* font-weight: bold; */
		}
	}

	/* justify-content: center; */

	.downIcon {
		position: relative;
		top: 2px;
		transform-origin: center;
		z-index: 99;
	}
`;
