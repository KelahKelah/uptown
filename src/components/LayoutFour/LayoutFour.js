import React from "react"
import { Col, Row} from "react-bootstrap";
import ImageOne from "../../assets/image/Team1.jpg";
import ImageTwo from '../../assets/image/Team2.jpg';
import ImageThree from '../../assets/image/Team3.jpg';
import ImageFour from '../../assets/image/Team4.jpg';




function LayoutFour() {
    return(
        
         <div>
            <Row>
                <Col md={3}><img src={ImageOne} alt="image" width="100%" height="100%"/></Col>
                <Col md={3}><img src={ImageTwo} alt="image" width="100%" height="100%"/></Col>
                <Col md={3}><img src={ImageThree} alt="image" width="100%" height="100%"/></Col>
                <Col md={3}><img src={ImageFour} alt="image" width="100%" height="100%"/></Col>

            </Row>

        </div>
        

    )
}

export default LayoutFour