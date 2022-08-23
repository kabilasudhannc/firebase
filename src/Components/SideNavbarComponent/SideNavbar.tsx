import React, { useState } from "react";
import "./SideNavbar.css";
import adminAvatar from '../../Assets/Icons/admin-avatar.svg';
import alignJustify from '../../Assets/Icons/align-justify.svg';
import folder from '../../Assets/Icons/folder.svg';
import grid from '../../Assets/Icons/grid.svg';
import heart from '../../Assets/Icons/heart.svg';
import Logo from '../../Assets/LoginPage/imageLogo.svg';
import logout from '../../Assets/Icons/logout.svg';
import message from '../../Assets/Icons/message.svg';
import pieChart from '../../Assets/Icons/pie-chart.svg';
import search from '../../Assets/Icons/search.svg';
import settings from '../../Assets/Icons/settings.svg';
import shoppingCart from '../../Assets/Icons/shopping-cart.svg';
import user from '../../Assets/Icons/user.svg';
import LazyImage from "../../Utils/LazyImage";


const SideNavbar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: grid,
		},
		{
			text: "Admin Profile",
			icon: user,
		},
		{
			text: "Messages",
			icon: message,
		},
		{
			text: "Analytics",
			icon: pieChart,
		},
		{
			text: "File Manager",
			icon: folder,
		},
		{
			text: "Orders",
			icon: shoppingCart,
		},
		{
			text: "Saved Items",
			icon: heart,
		},
		{
			text: "Settings",
			icon: settings,
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<LazyImage src={Logo} alt="" width="150px" height="80px"  />
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt=""/>
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src={adminAvatar}
							alt=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Logout</p>
							{/* <p className="nav-footer-user-position">store admin</p> */}
						</div>
					</div>
				)}
				<img className="logout-icon" src={logout} alt="" />
			</div>
		</div>
	);
};

export default SideNavbar;

