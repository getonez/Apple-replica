import React from 'react'

// Importing css basic
import "../../../css/bootstrap.css";
import "../../../css/body.css";

// Importing Fifth-section css
import "../../../css/Section/Fifth/Apple-fifth-section.css";

// Importing images
import apple_tv from '../../../images/icons/apple-tv-logo.png';
import Banker from '../../../images/home/banker.png';
import watch_series from '../../../images/icons/watch-series5-logo.png';

const Apple_fifth_section = () => {
  return (
    <section className="fifth-heghlight-wrapper text-center">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={apple_tv} alt="" />
							</div>
						</div>

						<div className="tvshow-logo-wraper pb-1">
							<img src={Banker} alt="" />
						</div>

						<div className="watch-more-wrapper pb-5">
							<a href="/Watch now on the Apple TV App/">Watch now on the Apple TV App</a>
						</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
								<img src={watch_series} alt="" />
							</div>
						</div>
						<div className="description-wraper">
							With the Always-On Retina display.<br />
							You’ve never seen a watch like this.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="/Learn more/">Learn more</a></li>
								<li><a href="/Buy/">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
  )
}

export default Apple_fifth_section;