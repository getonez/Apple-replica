import React from 'react'
import { Link } from "react-router-dom";
import $ from 'jquery';

// Importing css basic
import "../../css/bootstrap.css";
import "../../css/body.css";

// Importing header css
import "../../css/Header/Apple-header.css";

// Importing images
import logo_sm from '../../images/icons/logo-sm.png';
import search_sm from '../../images/icons/search-icon-sm.png';
import cart_sm from '../../images/icons/cart-sm.png';
import NavbarList from './NavbarList/NavbarList';
import { Navbar } from 'react-bootstrap';

function Apple_header() {
	React.useEffect(() => {
		$(".search-link").click(function () {
			// e.preventDefault();
			$(".navbar-collapse.collapse").removeClass("show");
			$(".searchbox").slideToggle();
		});
	}, []);

	return (
		<div>
			<div className="nav-tool fixed-top">
				<div className="container">
					<nav className="navbar navbar-toggleable-sm navbar-expand-md">
						<Navbar
							className="w-100"
							collapseOnSelect
							expand="lg"
							variant="dark">
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />

							<Link className="navbar-brand mx-auto apple-logo" to="/">
								<img src={logo_sm} alt="Apple logo" />
							</Link>

							<Navbar.Collapse id="responsive-navbar-nav">
								<ul className="navbar-nav nav-justified w-100 nav-fill">
									<NavbarList LinkUrl="/mac/" LinkName="Mac" />
									<NavbarList LinkUrl="/iphone/" LinkName="iphone" />
									<NavbarList LinkUrl="/ipad/" LinkName="ipad" />
									<NavbarList LinkUrl="/watch/" LinkName="watch" />
									<NavbarList LinkUrl="/tv/" LinkName="tv" />
									<NavbarList LinkUrl="/Music/" LinkName="Music" />
									<NavbarList LinkUrl="/Support/" LinkName="Support" />
									<li className="nav-item">
										<Link
											className="search-link nav-link js-scroll-trigger"
											to="/search/">
											<img src={search_sm} alt="Search logo" />
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link js-scroll-trigger logo-link"
											to="/cart/">
											<img src={cart_sm} alt="Cart logo" />
										</Link>
									</li>
								</ul>
							</Navbar.Collapse>
						</Navbar>
					</nav>
				</div>
			</div>

			<section className="searchbox">
				<form>
					<input type="text" name="searchbox" />
					<button id="submitButton" className="btn btn-primary" type="submit">
						Search
					</button>
				</form>
			</section>
		</div>
	);
}

// Exporting arrow function
export default Apple_header;