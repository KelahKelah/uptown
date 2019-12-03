import React from "react";
import ImageOne from "../../assets/image/Work1.jpg";
import ImageTwo from '../../assets/image/Work2.jpg';
import ImageThree from '../../assets/image/Work3.jpg';



function Photo() {
    return (
        <div>
            <div className="row">
                <div className="col-md-4"><img src={ImageOne} alt="image" width="100%" height="100%"/></div>
                <div className="col-md-4"><img src={ImageTwo} alt="image" width="100%" height="100%"/></div>
                <div className="col-md-4"><img src={ImageThree} alt="image" width="100%" height="100%"/></div>
            </div>

            
            

            {/* <div className="col-md-4">
                <img src={ImageOne} alt="image" width="100%" />
                <img src={ImageTwo} alt="image" width="100%" />
                <img src={ImageThree} alt="image" width="100%" />
            </div> */}


        </div>
    )
}

export default Photo