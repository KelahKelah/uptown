import React from 'react';
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Card  ({iconname, texthead, textBody}) {
    return(
            <Col md={3}>
                <div className="" style={{ textAlign: "center" }}>
                    {iconname &&<FontAwesomeIcon icon={iconname} size={"5x"} color={"#e86ed0"} />}
                
                        <div className="">
                            <h3>{texthead}</h3>
                            <p>{textBody}</p>
                        </div>
                </div>
            </Col>
    )
}

export default Card;