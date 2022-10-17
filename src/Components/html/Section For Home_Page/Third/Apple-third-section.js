import React from 'react'

// Importing css basic
import "../../../css/bootstrap.css";
import "../../../css/body.css";

// Importing Third-section css
import "../../../css/Section/Third/Apple-third-section.css";

const Apple_third_section = () => {
  return (
    <section className="third-hightlight-wrapper">
		<div className="container">
			<div className="title-wraper bold">
				iPhone 11 Pro 
			</div> 

			<div className="description-wrapper">
				Pro cameras. Pro display. Pro performance.
			</div>

			<div className="price-wrapper">
				From $24.95/mo. or $599 with trade‑in.
			</div>

			<div className="links-wrapper">
				<ul>
					<li><a href="/Learn more/">Learn more</a></li>
					<li><a href="/Buy/">Buy</a></li>
				</ul> 
			</div>
		</div>
	</section>
  )
}

export default Apple_third_section;