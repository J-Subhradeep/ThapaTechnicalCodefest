import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useState } from "react";
import { MenuItemWrapper } from "./Style/MenuItem.styled";
import { motion } from "framer-motion";
import { selectMenu } from "./Slices/MenudropdowniconSlice";
import { useDispatch, useSelector } from "react-redux";
import General from "./Dropdowns/General";
import { menu } from "./Static/Js/menu";
import Hosting from "./Dropdowns/Hosting";
import VPS from "./Dropdowns/VPS";
import Email from "./Dropdowns/Email";
import Domain from "./Dropdowns/Domain";

const MenuItem = (props) => {
	const value = useSelector((state) => state.menuSelect.value);
	const dispatch = useDispatch();
	const [state, setState] = useState("");
	const [dropdownComponent, setDropdownComponent] = useState(<></>);
	const components = [<Hosting />, <VPS />, <Email />, <Domain />];
	useEffect(() => {
		if (value != -1) {
			setState(menu[value]);
			setDropdownComponent(components[value]);
		}
	}, [value]);

	return (
		<>
			<MenuItemWrapper>
				<div
					className="inner-u"
					id={props.value}
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
							<KeyboardArrowDown
								id={props.value}
								onClick={() => {
									if (props.index == value) {
										dispatch(selectMenu(-1));
										return;
									}
									dispatch(selectMenu(props.index));
								}}
							/>
						</motion.div>
					) : (
						<motion.div
							className="downIcon"
							initial={{ rotate: 180 }}
							animate={{ rotate: 0 }}
						>
							<KeyboardArrowDown
								id={props.value}
								onClick={() => {
									if (props.index == value) {
										dispatch(selectMenu(-1));
										return;
									}
									dispatch(selectMenu(props.index));
								}}
							/>
						</motion.div>
					)}
				</div>
				{props.value == state && value != -1 && dropdownComponent}
				{/* {props.value == "Domain" && <General />} */}
			</MenuItemWrapper>
		</>
	);
};

export default MenuItem;
