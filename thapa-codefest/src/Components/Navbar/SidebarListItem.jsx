import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
	Collapse,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import React, { useState } from "react";

const SidebarListItem = ({ icon, name, children }) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={name} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{children.map((value, index) => {
						return (
							<ListItemButton sx={{ pl: 4 }} key={index}>
								<ListItemIcon>{value.icon}</ListItemIcon>
								<ListItemText primary={value.name} />
							</ListItemButton>
						);
					})}
				</List>
			</Collapse>
		</>
	);
};

export default SidebarListItem;
