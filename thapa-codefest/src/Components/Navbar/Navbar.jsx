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
import { selectMenu } from "./Slices/MenudropdowniconSlice";
import { useDispatch, useSelector } from "react-redux";
import General from "./Dropdowns/General";
import { IconButton } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	const dispatch = useDispatch();
	const [openSidebar, setOpenSidebar] = useState(false);
	useEffect(() => {
		document.addEventListener("click", (e) => {
			if (!menu.includes(e.target.id) || menu.includes(e.target.className)) {
				dispatch(selectMenu(-1));
				console.log(e.target);
			}
		});
	}, []);

	return (
		<>
			<Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
			<NavbarWrapper>
				<div className="main">
					<Link to="/" style={{ textDecoration: "none" }}>
						<motion.div
							className="logo"
							initial={{ y: -100 }}
							animate={{ y: 0 }}
						>
							<Image src={image} alt="Logo" />
						</motion.div>
					</Link>
					<div className="menu">
						<div className="menu-list" id="nav">
							{menu.map((value, index) => (
								<MenuItem value={value} key={index} index={index} />
							))}
						</div>
						<div
							className="menu-login-cart"
							onChange={() => {
								console.log("hi");
							}}
						>
							{/* <div> */}
							<Link to="/login" style={{ textDecoration: "none" }}>
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
							</Link>
							<Button
								className="login-btn"
								sx={{ color: "rgb(103,61,230)", marginX: "10px" }}
								endIcon={<ShoppingCartIcon />}
							>
								Cart
							</Button>
							<IconButton
								className="menu-btn-2"
								sx={{ color: "rgb(103,61,230)", marginX: "10px" }}
							>
								<ShoppingCartIcon />
							</IconButton>

							<IconButton
								className="menu-btn"
								sx={{ color: "rgb(103,61,230)", marginX: "10px" }}
								onClick={() => setOpenSidebar(true)}
							>
								<Menu />
							</IconButton>
							{/* </div> */}
						</div>
					</div>
				</div>
			</NavbarWrapper>
		</>
	);
};

export default Navbar;
