import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




function Heading ({heading, textheading}) {
    return(
        <Col md={12} className="justify-content-center">

            <Col md={12} className="heading-section text-center ftco-animate mb-5" >
                <span className="subheading">{heading}</span>
                <h2 className="mb-2">{textheading}</h2>
            </Col>


        </Col>
    )

}

export default Heading;