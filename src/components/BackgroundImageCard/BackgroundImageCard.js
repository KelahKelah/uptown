import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageTen from "../../assets/image/BImage.jpg";
import '../../assets/css/animate.css'



function BackgroundImageCard({title,heading,number,textHeader,text}) {

     return(

		<div >

			<div className="ftco-section ftco-degree-bg services-section img mx-md-5" style={{backgroundImage:`url(${ImageTen})`}}>
				<div className="overlay"></div>

				<Container>

					<Row  className="justify-content-start mb-5">
                        <div className="col-md-6 text-center heading-section heading-section-white ftco-animate">
						    <span className="subheading">{title}</span>
                            <h2 className="mb-3">{heading}</h2>
						</div>
					</Row>


					<Row>
						<Col md={6}>

							<Row>

								<Col md={12} lg={6} className="d-flex align-self-stretch ftco-animate">
									<div className="media block-6 services services-2">
		              					<div className="media-body py-md-4 text-center">
										    <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>{number}</span></div>
											<h3>{textHeader}</h3>
											<p>{text}</p>
										</div>
									</div>
								</Col>

								<Col md={12} lg={6} className="d-flex align-self-stretch ftco-animate">
									<div className="media block-6 services services-2">
		              					<div className="media-body py-md-4 text-center">
										    <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>{number}</span></div>
											<h3>{textHeader}</h3>
											<p>{text}</p>
										</div>
									</div>
								</Col>
                                        
								<Col md={12} lg={6} className="d-flex align-self-stretch ftco-animate">
									<div className="media block-6 services services-2">
		              					<div className="media-body py-md-4 text-center">
										    <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>{number}</span></div>
											<h3>{textHeader}</h3>
											<p>{text}</p>
										</div>
									</div>
								</Col>

								<Col md={12} lg={6} className="d-flex align-self-stretch ftco-animate">
									<div className="media block-6 services services-2">
		              					<div className="media-body py-md-4 text-center">
										    <div className="icon mb-3 d-flex align-items-center justify-content-center"><span>{number}</span></div>
											<h3>{textHeader}</h3>
											<p>{text}</p>
										</div>
									</div>
								</Col>

							</Row>
						</Col>
					</Row>

				</Container>
			</div>		


		</div>

	
    )

}

export default BackgroundImageCard