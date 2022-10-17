import React from 'react'

// Importing css basic
import "../../../css/bootstrap.css";
import "../../../css/body.css";

// Importing Second-section css
import "../../../css/Section/Second/Apple-second-section.css";

const Apple_second_section = () => {
  return (
    <section className="second-hightlight-wrapper">
    <div className="container">

        <div className="new-alert">
            New
        </div>

        <div className="title-wraper bold black">
            MacBook Air 
        </div> 

        <div className="description-wrapper black">
            Twice the speed. Twice the storage.
        </div>

        <div className="price-wrapper grey">
            From $999.
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

export default Apple_second_section;