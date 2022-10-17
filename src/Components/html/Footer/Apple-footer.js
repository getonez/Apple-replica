import React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

// Importing css basic
import "../../css/bootstrap.css";
import "../../css/body.css";

// Importing footer css
import "../../css/Footer/Apple-footer.css";

// Importing images
import country from "../../images/icons/16.png";

const Apple_footer = () => {
	if ($(window).width() <= 768) {
		$(".footer-links-wrapper").addClass("someClass");
	} else {
		$(".footer-links-wrapper").removeClass("someClass");
	}
	$(window).on("resize", function () {
		if ($(window).width() <= 768) {
			$(".footer-links-wrapper").addClass("someClass");
		} else {
			$(".footer-links-wrapper").removeClass("someClass");
			$(".footer-links-wrapper ul").show();
		}
	});
	// Footer collapse functionality
	$(".footer-links-wrapper").on("click", ".someClass h3", function () {
		$(this).next("ul").slideToggle();
		$(this).toggleClass("expanded");
	});

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="upper-text-container">
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade-in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple’s trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the{" "}
            <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Customer Agreement
            </a>
            . Additional iPhone Payments terms are{" "}
            <Link to="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
              {" "}
              here
            </Link>
            .
          </p>
          <p>
            2. Subscription required.
            <br />
            <br />
            Magic Keyboard sold separately.
            <br />
            <br />
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <Link to="https://www.apple.com/promo/">terms </Link> apply.
          </p>
        </div>
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-12 col-md">
            <h3>Shop and Learn</h3>
            <ul>
              <li>
                <Link to="/Mac/">Mac</Link>
              </li>
              <li>
                <Link to="/ipad/">iPad</Link>
              </li>
              <li>
                <Link to="/iphone/">iPhone</Link>
              </li>
              <li>
                <Link to="/Watch/">Watch</Link>
              </li>
              <li>
                <Link to="/TV/">TV</Link>
              </li>
              <li>
                <Link to="/Music/">Music</Link>
              </li>
              <li>
                <Link to="/AirPods/">AirPods</Link>
              </li>
              <li>
                <Link to="/HomePods/">HomePod</Link>
              </li>
              <li>
                <Link to="/ipod touch/">iPod touch</Link>
              </li>
              <li>
                <Link to="/Accessories/">Accessories</Link>
              </li>
              <li>
                <Link to="/Gift Cards/">Gift Cards</Link>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-2 col-sm-12 col-md">
            <h3>Services</h3>
            <ul>
              <li>
                <Link to="/Apple Music/">Apple Music</Link>
              </li>
              <li>
                <Link to="/Apple News+/">Apple News+</Link>
              </li>
              <li>
                <Link to="/Apple TV+/">Apple TV+</Link>
              </li>
              <li>
                <Link to="/Apple Arcade/">Apple Arcade</Link>
              </li>
              <li>
                <Link to="/Apple Card/">Apple Card</Link>
              </li>
              <li>
                <Link to="/iCloud/">iCloud</Link>
              </li>
            </ul>
            <h3>Account</h3>
            <ul>
              <li>
                <Link to="/Manage Your Apple ID/">Manage Your Apple ID</Link>
              </li>
              <li>
                <Link to="/Apple Store Account/">Apple Store Account</Link>
              </li>
              <li>
                <Link to="/iCloud.com/">iCloud.com</Link>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-3 col-sm-12 col-md">
            <h3>Apple Store</h3>
            <ul>
              <li>
                <Link to="/Find a Store/">Find a Store</Link>
              </li>
              <li>
                <Link to="/Genius Bar/">Genius Bar</Link>
              </li>
              <li>
                <Link to="/Today at Apple/">Today at Apple</Link>
              </li>
              <li>
                <Link to="/Apple Camp/">Apple Camp</Link>
              </li>
              <li>
                <Link to="/Field Trip/">Field Trip</Link>
              </li>
              <li>
                <Link to="/Apple Store App/">Apple Store App</Link>
              </li>
              <li>
                <Link to="/Refurbished and Clearance/">
                  Refurbished and Clearance
                </Link>
              </li>
              <li>
                <Link to="/Financing/">Financing</Link>
              </li>
              <li>
                <Link to="/Apple Trade In/">Apple Trade In</Link>
              </li>
              <li>
                <Link to="/Order Status/">Order Status</Link>
              </li>
              <li>
                <Link to="/Shopping Help/">Shopping Help</Link>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-4 col-sm-12 col-md">
            <h3>For Business</h3>
            <ul>
              <li>
                <Link to="/Apple and Business/">Apple and Business</Link>
              </li>
              <li>
                <Link to="/Shop for Business/">Shop for Business</Link>
              </li>
            </ul>
            <h3>For Education</h3>
            <ul>
              <li>
                <Link to="/Apple and Education/">Apple and Education</Link>
              </li>
              <li>
                <Link to="/Shop for College/">Shop for College</Link>
              </li>
            </ul>
            <h3>For Healthcare</h3>
            <ul>
              <li>
                <Link to="/Manage Your Apple ID/">Manage Your Apple ID</Link>
              </li>
              <li>
                <Link to="/Apple Store Account/">Apple Store Account</Link>
              </li>
              <li>
                <Link to="/iCloud.com/">iCloud.com</Link>
              </li>
            </ul>
            <h3>For Government</h3>
            <ul>
              <li>
                <Link to="/Apple and Education/">Apple and Education</Link>
              </li>
              <li>
                <Link to="/Shop for College/">Shop for College</Link>
              </li>
            </ul>
          </div>
          <div className="links-wrapper-5 col-sm-12 col-md">
            <h3>Apple Values</h3>
            <ul>
              <li>
                <Link to="/Find a Store/">Find a Store</Link>
              </li>
              <li>
                <Link to="/Genius Bar/">Genius Bar</Link>
              </li>
              <li>
                <Link to="/Today at Apple/">Today at Apple</Link>
              </li>
              <li>
                <Link to="/Apple Camp/">Apple Camp</Link>
              </li>
              <li>
                <Link to="/Field Trip/">Field Trip</Link>
              </li>
              <li>
                <Link to="/Apple Store App/">Apple Store App</Link>
              </li>
            </ul>
            <h3>About Apple</h3>
            <ul>
              <li>
                <Link to="/Find a Store/">Find a Store</Link>
              </li>
              <li>
                <Link to="/Genius Bar/">Genius Bar</Link>
              </li>
              <li>
                <Link to="/Today at Apple/">Today at Apple</Link>
              </li>
              <li>
                <Link to="/Apple Camp/">Apple Camp</Link>
              </li>
              <li>
                <Link to="/Field Trip/">Field Trip</Link>
              </li>
              <li>
                <Link to="/Apple Store App/">Apple Store App</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-apple-wrapper">
          More ways to shop:{" "}
          <Link to="/Find an Apple Store/">Find an Apple Store</Link> or{" "}
          <Link to="/other retailer/">other retailer</Link> near you. Or call
          1-800-MY-APPLE.
        </div>
        <div className="copyright-wrapper row">
          <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
            Copyright &copy; 2020 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
            <ul>
              <li>
                <Link to="/Privacy Policy/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/Terms of Use/">Terms of Use</Link>
              </li>
              <li>
                <Link to="/Sales and Refunds/">Sales and Refunds</Link>
              </li>
              <li>
                <Link to="/Legal/">Legal</Link>
              </li>
              <li>
                <Link to="/Site Map/">Site Map</Link>
              </li>
            </ul>
          </div>
          <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
            <div className="flag-wrapper">
              <img src={country} alt="" />
            </div>{" "}
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Apple_footer;
