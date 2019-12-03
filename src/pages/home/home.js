import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserTag, faAngry, } from '@fortawesome/free-solid-svg-icons'
import Card from "../../components/singleCard/singleCard"
import Heading from "../../components/SectionHeading/sectionHeading" ;
import Photo from "../../components/photoLayout/photoLayout";
import Imagefour from "../../assets/image/About.jpg"




function Home() {
    return (
        <div>

            <div className="container-fluid">
                <div className="row">
                    <Heading
                        heading="SERVICES"
                        textheading="Exclusive offer for you"
                    />

                </div>    


                <div className="row">
                    <Card
                        iconname={faCoffee}
                        texthead="No Downpayment"
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                    />
                     <Card
                        iconname={faUserTag}
                        texthead="All cash offer"
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                    />
                     <Card
                        iconname={faAngry}
                        texthead="Everybody"
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                    />
                     <Card
                        iconname={faCoffee}
                        texthead="All of me"
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                    />
                </div>

            </div>

            {/* ENDS */}

            <br />
            <br />


            {/* STARTS */}

            <div className="container">
                <div className="row">
                    <Heading
                        heading="WHAT WE OFFER"
                        textheading="Exclusive offer for you"
                    />

                </div>    

                <div className="row">
                    <Photo/>

                </div>
            </div>
                    
            {/* ENDS */}

            <br />
            <br />

            {/* STARTS */}

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Imagefour} alt="img" width="100%" height="100%" />
                        
                    </div>
                    <div className="col-md-6">
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            </p>

                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from 
                            it would have been rewritten a thousand times and everything that was left from its origin 
                            would be the word "and" and the Little Blind Text should turn around and return to its own,
                             safe country. But nothing the copy said could convince her and so it didn’t take long until 
                             a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged 
                             her into their agency, where they abused her for their.
                        </p>

                    </div>

                </div>
            </div>

 
            {/* ENDS */}

            <br />
            <br />

            

           {/* STARTS */}

            <div className="container">
                <div className="row">
                    <Heading
                        heading="AGENTS"
                        textheading="Our Agents"
                    />

                </div>

                <div className="row">
                    <Photo/>

                </div>  
            </div>


            {/* ENDS */}

            <br/>
            <br/>
           

            <div className="container">
                <div className="row">
                    <Heading
                        heading="TESTIMONIALS"
                        textheading="Happy Clients"
                    />

                </div>  

                <div className="row">
                    <Card
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                        texthead="Oga Emma"
                    />
                     <Card
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                        texthead="Ibe Oranye"
                    />
                     <Card
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                        texthead="Ochoko Chimereze"
                    />
                     <Card
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                        texthead="Arthur Nancy"

                    />
                </div>  
            </div>

            <br />
            <br />
                    
            {/* ENDS */}



            <div className="container-fluid"> 
                <div className="row">
                    <Card
                        texthead="Uptown"
                        textBody="Far far away, behind the word mountains, far from the countries."
                    />
                </div>
            </div>



        
        </div>

    )
}




export default Home