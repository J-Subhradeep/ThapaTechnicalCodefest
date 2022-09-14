import styled from "styled-components";
export const NavbarWrapper = styled.div`
	width: 100%;
	position: fixed;
	background-color: rgb(224, 224, 225);
	height: 70px;
	.main {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: 4fr 6fr;
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
					border: 1px solid rgb(103, 61, 230);
					width: 110px;
				}
			}
		}
	}
`;
