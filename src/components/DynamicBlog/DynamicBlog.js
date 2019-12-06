import React from "react";



function Dynamic(props) {
    return(
        <div>
            <div>
                <h3>{props.title}</h3>
                <h6>{props.author}</h6>
                <img src={props.picture} width="100%" height="100%"/>
                <p>{props.article}</p>
            </div>

        </div>
    )
}

export default Dynamic ;