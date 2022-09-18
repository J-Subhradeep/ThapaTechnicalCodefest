import styled from "styled-components";
export const NavbarWrapper = styled.div`
	width: 100%;
	position: fixed;
	background-color: white;
	height: 70px;
	z-index: 100;
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
	.menu-btn,
	.menu-btn-2 {
		display: none;
	}
	@media screen and (max-width: 1100px) {
		.main {
			grid-template-columns: 5fr 9fr;
		}
	}
	@media screen and (max-width: 957px) {
		.main {
			grid-template-columns: 9fr 7fr;

			.menu {
				.menu-list {
					display: none;
				}
				.menu-login-cart {
					width: 100%;

					display: grid;
					grid-template-columns: auto auto auto;
					.menu-btn {
						display: flex;
					}
				}
			}
		}
	}
	@media screen and (max-width: 500px) {
		.main {
			.menu {
				.menu-login-cart {
					width: 100%;

					display: grid;
					grid-template-columns: auto auto auto;
					.menu-btn {
						display: flex;
					}
					.menu-btn-2 {
						display: flex;
					}
					.login-btn {
						display: none;
					}
				}
			}
		}
	}
`;
