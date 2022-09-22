import Email from "@mui/icons-material/Email";
import VpnKey from "@mui/icons-material/VpnKey";
import {
	Button,
	Checkbox,
	FormControlLabel,
	IconButton,
	Input,
	InputAdornment,
	InputLabel,
	TextField,
} from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { LoginWrapper } from "./Styles/Login.styled";
import {
	AccountCircle,
	AddShoppingCart,
	Alarm,
	Facebook,
	Google,
	Twitter,
} from "@mui/icons-material";
import { motion } from "framer-motion";
const Login = () => {
	return (
		<div>
			<Navbar />
			<LoginWrapper>
				<motion.div
					className="main"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.4 }}
				>
					<motion.div
						className="heading"
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.4, delay: 0.3 }}
					>
						<span className="heading-text">Login</span>
					</motion.div>
					<div className="inputs">
						<InputLabel
							htmlFor="input-with-icon-adornment"
							style={{ fontSize: "12px" }}
						>
							{"Enter Your Email"}
						</InputLabel>
						<Input
							fullWidth
							id="input-with-icon-adornment"
							startAdornment={
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							}
						/>
						<br />
						<br />
						<InputLabel
							htmlFor="input-with-icon-adornment"
							style={{ fontSize: "12px" }}
						>
							{"Enter Your Password"}
						</InputLabel>
						<Input
							fullWidth
							type="password"
							id="input-with-icon-adornment"
							startAdornment={
								<InputAdornment position="start">
									<VpnKey />
								</InputAdornment>
							}
						/>
					</div>
					<div className="forgot-password">
						<span>Don't Have an Account ? </span>
						<span>Forgot Your Password ? </span>
					</div>
					<div className="login-btn">
						<Button className="btn-login">Login</Button>
						<div
							style={{
								fontSize: "13px",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Checkbox size="small" /> Remember Me
						</div>
					</div>
					<div className="or">
						<span>Or Sign Up With</span>
					</div>
					<motion.div
						className="social-media"
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.4, delay: 0.8 }}
					>
						<IconButton color="primary" aria-label="add an alarm">
							<Facebook />
						</IconButton>
						<IconButton color="primary" aria-label="add to shopping cart">
							<Twitter />
						</IconButton>
						<IconButton color="error" aria-label="add to shopping cart">
							<Google />
						</IconButton>
					</motion.div>
				</motion.div>
			</LoginWrapper>
		</div>
	);
};

export default Login;
