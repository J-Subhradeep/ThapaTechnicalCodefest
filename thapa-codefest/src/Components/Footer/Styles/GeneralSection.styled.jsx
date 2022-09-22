import styled from "styled-components";
export const SecondSectionWrapper = styled.div`
	min-height: 200px;
	width: 200px;
	/* background: green; */
	padding: 10px;
	.heading {
		font-size: 20px;
		color: #242424;
		font-weight: 700;
	}
	.list {
		margin-top: 15px;
	}
	.list-item {
		margin-top: 6px;
		transition: all 0.3s;
		&:hover {
			color: #676767;
			transition: all 0.3s;
			cursor: pointer;
		}
	}
`;
