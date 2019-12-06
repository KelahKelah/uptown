import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserTag, faAngry, } from '@fortawesome/free-solid-svg-icons'
import Card from "../../components/singleCard/singleCard"
import Heading from "../../components/SectionHeading/sectionHeading";
import PhotoThree from "../../components/photoLayout/photoLayout";
import Dynamic from "../../components/DynamicBlog/DynamicBlog";
import Imagefour from "../../assets/image/About.jpg"
import ImageFive from "../../assets/image/Blog1.jpg"
import ImageSix from "../../assets/image/Blog2.jpg"
import ImageSeven from "../../assets/image/Blog3.jpg"
import ImageEight from "../../assets/image/Blog4.jpg"
import BackgroundImageCard from "../../components/BackgroundImageCard/BackgroundImageCard"
import LayoutFour from "../../components/LayoutFour/LayoutFour";







function Home() {
    return (
        <div>
               {/* SERVICES STARTS */}

            <div className="container-fluid">
                <Row>
                    <Heading
                        heading="SERVICES"
                        textheading="The smartest way to buy a home"
                    />

                </Row>


                <Row>
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
                </Row>

            </div>

            {/*SERVICES ENDS */}

            <br />
            <br />


            {/*OFFER STARTS */}

            <Container>
                <Row>
                    <Heading
                        heading="WHAT WE OFFER"
                        textheading="Exclusive offer for you"
                    />

                </Row>

                <Row>
                    <PhotoThree />

                </Row>
            </Container>

            {/* OFFER ENDS */}

            <br />
            <br />
            {/* WORK FLOW STARTS */}

            <div>
                <BackgroundImageCard
                    title="Work flow"
                    heading="How it works"
                    number="01"
                    text="A small river named Duden flows by their place and supplies it with the necessary regelialia."

                />
            </div>

            {/* WORK FLOW ENDS */}

            <br/>
            <br/>
            <br/>


            {/* STARTS */}

            <Container>
                <Row>
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

                </Row>
            </Container>


            {/* ENDS */}

            <br />
            <br />



            {/* STARTS */}

            <Container>
                <Row>
                    <Heading
                        heading="AGENTS"
                        textheading="Our Agents"
                    />

                </Row>

                <Row>
                    <LayoutFour />

                </Row>
            </Container>


            {/* ENDS */}

            <br />
            <br />


            <Container>
                <Row>
                    <Heading
                        heading="TESTIMONIALS"
                        textheading="Happy Clients"
                    />

                </Row>

                <Row>
                    <Card
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                        texthead="Oga Emma"
                    />
                    <Card
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                        texthead="Ibe Soft"
                    />
                    <Card
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                        texthead="Ochoko Chimereze"
                    />
                    <Card
                        textBody="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                        texthead="Arthur Obiageli"

                    />
                </Row>
            </Container>

            <br />
            <br />

            {/* ENDS */}

            <br />
            <br />


            {/* DYNAMIC BLOG START */}

            <Container>
                <Row>
                    <Heading
                        heading="BLOG"
                        textheading="Recent Blog"
                    />
                </Row>



                <Row>
                    <div className="col-md-3">
                        <Dynamic 
                            title="Why Lead Generation growth"
                            author="Nonny oranye"
                            picture={ImageFive}
                            article="Sangre for sangre is an acient word from the land of niniveh. In the days of our fore-fathers"
                        
                        />
                    </div>
                        
                    <div className="col-md-3">
                        <Dynamic 
                            title="Why Lead Generation is Key"
                            author="Nancy Goddy"
                            picture={ImageSix}
                            article="May the good Lord be with all of you in Jesus name i pray for all of you. It shall be well with you"
                    
                        /> 
                    </div>

                    <div className="col-md-3">
                        <Dynamic 
                            title="How are we today my people"
                            author="Julius Berger"
                            picture={ImageSeven}
                            article="Oga! Iga agbani. When you come early, you get a better sit oga! Odigonu ka oya di now. No wahala"
                        
                        />
                    </div>

                    <div className="col-md-3">
                        <Dynamic 
                            title="Is this dummy text good "
                            author="Best Bread"
                            picture={ImageEight}
                            article="It is not that easy to create a dummy text that is not Lorem ipsum. Mehn why is it so difficult"
                        
                        />  
                    </div>
                </Row>

            </Container>

            {/* DYNAMIC BLOG ENDS */}

            




                    <div className="container-fluid">
                        <Row>
                            <Card
                                texthead="Uptown"
                                textBody="Far far away, behind the word mountains, far from the countries."
                            />
                        </Row>
                    </div>
    
        </div>

    )
}




export default Home