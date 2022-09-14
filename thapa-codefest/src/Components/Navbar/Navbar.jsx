import React from "react";
import { NavbarWrapper } from "./Style/Navbar.styled";
import image from "./Static/Images/logo.png";
import { menu } from "./Static/Js/menu";
import { MenuItemWrapper } from "./Style/MenuItem.styled";
import { Image } from "./Style/ImageLogo.styled";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuItem from "./MenuItem";
import { useEffect } from "react";

const Navbar = () => {
	return (
		<NavbarWrapper>
			<div className="main">
				<motion.div className="logo" initial={{ y: -100 }} animate={{ y: 0 }}>
					<Image src={image} alt="Logo" />
				</motion.div>
				<div className="menu">
					<div className="menu-list" id="nav">
						{menu.map((value, index) => (
							<MenuItem value={value} key={index} index={index} />
						))}
					</div>
					<div className="menu-login-cart">
						<div>
							<Button
								className="login-btn"
								sx={{
									color: "rgb(103,61,230)",
									border: "1px solid rgb(103, 61, 230)",
								}}
								endIcon={<VpnKeyIcon />}
							>
								Login
							</Button>
							<Button
								className="login-btn"
								sx={{ color: "rgb(103,61,230)", marginX: "10px" }}
								endIcon={<ShoppingCartIcon />}
							>
								Cart
							</Button>
						</div>
					</div>
				</div>
			</div>
		</NavbarWrapper>
	);
};

export default Navbar;
