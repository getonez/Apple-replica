import React from 'react'

// Importing css basic
import "../../../css/bootstrap.css";
import "../../../css/body.css";

// Importing Fourth-section css
import "../../../css/Section/Fourth/Apple-fourth-section.css";

const Apple_fourth_section = () => {
  return (
    <section className="fourth-heghlight-wrapper py-2">
    <div className="container-fluid">
        <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6 text-center">
                <div className="left-side-container">
                    <div className="title-wraper font-weight-bold">
                        iPhone 11 
                    </div> 
                    <div className="description-wraper pt-3">
                        Just the right amount of everything.
                    </div>
                    <div className="price-wrapper">
                        From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                    </div>

                    <div className="links-wrapper">
                        <ul>
                            <li><a href="/Learn more/">Learn more</a></li>
                            <li><a href="/Apply now/">Apply now</a></li>
                        </ul> 
                    </div>
                </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6 text-center text-white-50">
                <div className="right-side-container">
                    <div className="title-wraper white mx-auto">
                        <p>
                        Get the latest CDC response to COVID-19. 
                        </p>
                    </div> 

                    <div className="links-wrapper white watch">
                        <ul>
                            <li><a href="/Watch the PSA/">Watch the PSA</a></li>
                        </ul> 
                    </div>
                </div>
            </div>					
        </div>
    </div> 
</section>
  )
}

export default Apple_fourth_section;