import { Button, IconButton, SwipeableDrawer } from "@mui/material";
import React from "react";
import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import styled from "styled-components";
import image from "./Static/Images/logo.png";
import Menu from "@mui/icons-material/Menu";
import VpnKey from "@mui/icons-material/VpnKey";
import { SidebarWrapper } from "./Style/Sidebar.styled";
import CloudIcon from "@mui/icons-material/Cloud";
import StorageIcon from "@mui/icons-material/Storage";
import EmailIcon from "@mui/icons-material/Email";
import DomainIcon from "@mui/icons-material/Domain";
import SidebarListItem from "./SidebarListItem";
import Email from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import DnsIcon from "@mui/icons-material/Dns";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import cyberpanel from "./Static/Images/cyberpanel2.png";
import wordpress from "./Static/Images/wordpress2.png";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LanguageIcon from "@mui/icons-material/Language";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
const Subheader = styled.div`
	height: 70px;

	width: 100%;
	div {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		.image-listsubheader {
			height: 60%;
			width: auto;
		}
		.menu-btn-listsubheader {
		}
	}
`;
const Sidebar = ({ openSidebar, setOpenSidebar }) => {
	return (
		<SwipeableDrawer
			open={openSidebar}
			onClose={() => {
				setOpenSidebar(false);
			}}
		>
			<SidebarWrapper>
				<List
					style={{ width: "300px" }}
					subheader={
						<ListSubheader>
							<Subheader>
								<div>
									<IconButton
										className="menu-btn-listsubheader"
										onClick={() => {
											setOpenSidebar(false);
										}}
									>
										<Menu />
									</IconButton>
									<img src={image} alt="" className="image-listsubheader" />
								</div>
							</Subheader>
						</ListSubheader>
					}
				>
					<SidebarListItem
						icon={<CloudIcon />}
						name="Hosting"
						children={[
							{ icon: <LanguageIcon />, name: "Web Hosting" },
							{ icon: <CloudCircleIcon />, name: "Cloud Hosting" },
							{
								icon: (
									<img
										src={wordpress}
										height="23px"
										width="auto"
										className="wordpress"
									/>
								),
								name: "Wordpress Hosting",
							},
						]}
					/>
					<SidebarListItem
						icon={<StorageIcon />}
						name="VPS"
						children={[
							{ icon: <DnsIcon />, name: "VPS Hosting" },
							{
								icon: (
									<img
										src={cyberpanel}
										height="35px"
										width="auto"
										className="cyberpanel"
									/>
								),
								name: "CyberPanel Hosting",
							},
							{ icon: <AutoFixNormalIcon />, name: "Minecraft Server Hosting" },
						]}
					/>
					<SidebarListItem
						icon={<DomainIcon />}
						name="Domain"
						children={[
							{ icon: <ManageSearchIcon />, name: "Domain Name Search" },
							{ icon: <TravelExploreIcon />, name: "WHOIS Lookup" },
							{ icon: <PublishedWithChangesIcon />, name: "Domain Transfer" },
						]}
					/>
					<SidebarListItem
						icon={<Email />}
						name="Email"
						children={[
							{ icon: <GoogleIcon />, name: "Google Workspace Email Hosting" },
							{ icon: <AlternateEmailIcon />, name: "Hostinger Email Hosting" },
						]}
					/>
					<Button
						className="login-btnn"
						sx={{
							color: "rgb(103,61,230)",
							border: "1px solid rgb(103, 61, 230)",
						}}
						endIcon={<VpnKey />}
					>
						Login
					</Button>
				</List>
			</SidebarWrapper>
		</SwipeableDrawer>
	);
};

export default Sidebar;
