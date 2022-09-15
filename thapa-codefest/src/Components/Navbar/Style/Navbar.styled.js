import styled from "styled-components";
export const NavbarWrapper = styled.div`
	width: 100%;
	position: fixed;
	background-color: rgb(224, 224, 225);
	height: 70px;
	position: relative;

	.main {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 5fr 6fr;
		.logo {
			height: 100%;
			width: 100%;
		}
		.menu {
			height: 100%;
			width: 100%;
			display: flex;
			.menu-list {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				width: 60%;
				/* background-color: green; */
			}
			.menu-login-cart {
				display: flex;
				width: 40%;
				height: 100%;
				align-items: center;
				justify-content: center;
				position: relative;
				.login-btn {
					border-radius: 30px;

					width: 110px;
				}
			}
		}
	}
`;
