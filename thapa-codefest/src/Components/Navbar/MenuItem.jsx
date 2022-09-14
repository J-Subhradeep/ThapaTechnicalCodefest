import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useState } from "react";
import { MenuItemWrapper } from "./Style/MenuItem.styled";
import { motion } from "framer-motion";
import { selectMenu } from "./Slices/MenudropdowniconSlice";
import { useDispatch, useSelector } from "react-redux";

const MenuItem = (props) => {
	const value = useSelector((state) => state.menuSelect.value);
	const dispatch = useDispatch();

	return (
		<MenuItemWrapper
			id={props.value + "_id"}
			onClick={() => {
				if (props.index == value) {
					dispatch(selectMenu(-1));
					return;
				}
				dispatch(selectMenu(props.index));
			}}
		>
			{props.value}
			{props.index == value ? (
				<motion.div
					className="downIcon"
					initial={{ rotate: 0 }}
					animate={{ rotate: 180 }}
				>
					<KeyboardArrowDown />
				</motion.div>
			) : (
				<motion.div
					className="downIcon"
					initial={{ rotate: 180 }}
					animate={{ rotate: 0 }}
				>
					<KeyboardArrowDown />
				</motion.div>
			)}
		</MenuItemWrapper>
	);
};

export default MenuItem;
