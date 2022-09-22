import styled from "styled-components";
export const LoginWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	/* background: blue; */
	display: flex;
	align-items: center;
	justify-content: center;

	.main {
		height: 450px;
		top: 30px;
		position: relative;
		width: 400px;
		background: white;
		border-radius: 5px;
		border: 1px solid #d6d4d4;
		box-shadow: 2px 2px 4px #4c4c4c;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
	}
	.heading {
		padding: 15px;
		padding-left: 30px;
		padding-top: 25px;
	}
	.heading-text {
		font-size: 25px;
		/* font-weight: bold; */
		text-shadow: 1px 2px 2px #4c4c4c;
		text-transform: uppercase;
	}
	.inputs {
		padding-top: 20px;
		padding-left: 30px;
		padding-right: 50px;
	}
	.forgot-password {
		font-size: 13px;
		/* text-align: left; */
		display: flex;
		/* align-items: flex-end; */
		justify-content: space-between;
		/* background-color: red; */
		padding: 20px;
		padding-right: 40px;
		width: 100%;
		padding-left: 30px;
	}
	.btn-login {
		background-image: linear-gradient(45deg, #673de686, rgb(103, 61, 230));
		color: white;
		border-radius: 30px;
		width: 120px;
		padding: 10px;
	}
	.login-btn {
		padding: 0 40px 0 30px;
		padding-top: 0px;
		display: flex;
		justify-content: space-between;
		/* align-items: flex-start; */
		/* background-color: red; */
	}
	.or {
		font-size: 12px;
		text-align: center;
		padding: 20px;
	}
	.social-media {
		padding-left: 30px;
		padding-right: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media screen and (max-width: 400px) {
		.main {
			width: 350px;
		}
	}
`;
