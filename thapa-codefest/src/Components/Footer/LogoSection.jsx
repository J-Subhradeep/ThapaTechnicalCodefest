import React from "react";
import { LogoSectionWrapper } from "./Styles/LogoSection.styled";
import image from "./Static/Images/logo.png";
const LogoSection = () => {
	return (
		<LogoSectionWrapper>
			<img src={image} alt="" className="logo" />
			<span className="text">
				We are a web hosting company with a mission to help everyone who goes
				online succeed. We accomplish this by continuously developing server
				technology, giving expert assistance, and ensuring a flawless online
				website hosting experience.
			</span>
			<ul class="footer-new-holder-right-holder__payments">
				<li class="footer-new-holder-right-holder-payments__payment">
					<img
						class="h-100 lazy-load-image lazy-loaded-src"
						width="60"
						height="40"
						data-src="https://assets.hostinger.com/images/payments/homepage-2020-payments/visa-5d68dadf24.png"
						src="https://assets.hostinger.com/images/payments/homepage-2020-payments/visa-5d68dadf24.png"
						alt="visa"
					/>
				</li>
				<li class="footer-new-holder-right-holder-payments__payment">
					<img
						class="h-100 lazy-load-image lazy-loaded-src"
						width="60"
						height="40"
						data-src="https://assets.hostinger.com/images/payments/homepage-2020-payments/mastercard-ca75c7f8d3.png"
						src="https://assets.hostinger.com/images/payments/homepage-2020-payments/mastercard-ca75c7f8d3.png"
						alt="mastercard"
					/>
				</li>
				<li class="footer-new-holder-right-holder-payments__payment">
					<img
						class="h-100 lazy-load-image lazy-loaded-src"
						width="60"
						height="40"
						data-src="https://assets.hostinger.com/images/payments/homepage-2020-payments/discover-1e5edf3f39.png"
						src="https://assets.hostinger.com/images/payments/homepage-2020-payments/discover-1e5edf3f39.png"
						alt="discover"
					/>
				</li>
				<li class="footer-new-holder-right-holder-payments__payment">
					<img
						class="h-100 lazy-load-image lazy-loaded-src"
						width="60"
						height="40"
						data-src="https://assets.hostinger.com/images/payments/homepage-2020-payments/dinersclub-3f02e2deec.png"
						src="https://assets.hostinger.com/images/payments/homepage-2020-payments/dinersclub-3f02e2deec.png"
						alt="dinersclub"
					/>
				</li>
				<li class="footer-new-holder-right-holder-payments__payment">
					<img
						class="h-100 lazy-load-image lazy-loaded-src"
						width="60"
						height="40"
						data-src="https://assets.hostinger.com/images/payments/homepage-2020-payments/rupay-2bad18f6df.png"
						src="https://assets.hostinger.com/images/payments/homepage-2020-payments/rupay-2bad18f6df.png"
						alt="rupay"
					/>
				</li>
				{/* <li class="footer-new-holder-right-holder-payments__link"> */}
				{/* </li> */}
			</ul>
			<div id="hgr-footer-footer-link-add_more">
				<a>And More</a>
			</div>
		</LogoSectionWrapper>
	);
};

export default LogoSection;
