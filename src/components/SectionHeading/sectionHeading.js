import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




function Heading ({heading, textheading}) {
    return(
        <div className="col-md-12 justify-content-center">

            <div className="col-md-12 heading-section text-center ftco-animate mb-5" >
                <span className="subheading">{heading}</span>
                <h2 className="mb-2">{textheading}</h2>
            </div>


        </div>
    )

}

export default Heading;