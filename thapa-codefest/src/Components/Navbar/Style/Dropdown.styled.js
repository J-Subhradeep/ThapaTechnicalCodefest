import styled from "styled-components";
export const DropdownWrapper = styled.div`
	position: absolute;
	transform: translate(-50%, 0);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 300px;
	width: 340px;
	border-radius: 10px;
	background-color: white;
	border: 1px solid grey;
	.list-dropdown {
		width: 100%;
		height: 100%;
		padding: 15px 10px 20px 20px;

		.li-item {
			display: flex;
			align-items: center;
			/* background-color: grey; */
			margin-top: 10px;
			.li-icon {
				padding: 10px;
			}
			.li-heading {
				font-weight: bold;
				color: rgb(103, 61, 230);
				/* padding: 5px 0; */
				font-size: 17px;
			}
			.li-text {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			.li-subtext {
				padding: 3px 0;
				font-size: 13px;
			}
		}
	}
`;
