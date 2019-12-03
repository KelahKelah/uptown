import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Card  ({iconname, texthead, textBody}) {
    return (<div className="col-md-3">
            <div className="" style={{ textAlign: "center" }}>
               {iconname &&<FontAwesomeIcon icon={iconname} size={"5x"} color={"#e86ed0"} />}
            
                <div className="">
                    <h3>{texthead}</h3>
                    <p>{textBody}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;