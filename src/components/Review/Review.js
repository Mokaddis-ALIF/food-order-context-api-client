import React from 'react';
import './Review.css';
import title from '../../assets/images/title-shape.svg';
import testimonialImg from '../../assets/images/testimonial-img.png';
import { BsFillStarFill } from 'react-icons/bs';

const Review = () => {
	return (
		<>
			<section className="testimonials section bg-light">
				<div className="sec-wp">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="sec-title text-center mb-5">
									<p className="sec-sub-title mb-3">What they say</p>
									<h2 className="h2-title">
										What our customers <span>say about us</span>
									</h2>
									<div className="sec-title-shape mb-4">
										<img src={title} alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5">
								<div className="testimonials-img">
									<img src={testimonialImg} alt="" />
								</div>
							</div>
							<div className="col-lg-7">
								<div className="row">
									<div className="col-sm-6">
										<div className="testimonials-box">
											<div className="testimonial-box-top">
												<div className="back-img"></div>
												<div className="star-rating-wp">
													<div className="star-rating">
														{/* <span
															className="star-rating__fill"
															style={{ width: '85%' }}
														></span> */}
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
													</div>
												</div>
											</div>
											<div className="testimonials-box-text">
												<h3 className="h3-title">Nilay Hirpara</h3>
												<p>
													Lorem, ipsum dolor sit amet consectetur adipisicing
													elit. Itaque, quisquam.
												</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="testimonials-box">
											<div className="testimonial-box-top">
												<div className="back-img2"></div>
												<div className="star-rating-wp">
													<div className="star-rating">
														{/* <span
															className="star-rating__fill"
															style={{ width: '85%' }}
														></span> */}
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
													</div>
												</div>
											</div>
											<div className="testimonials-box-text">
												<h3 className="h3-title">Ravi Kumawat</h3>
												<p>
													Lorem, ipsum dolor sit amet consectetur adipisicing
													elit. Itaque, quisquam.
												</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="testimonials-box">
											<div className="testimonial-box-top">
												<div className="back-img3"></div>
												<div className="star-rating-wp">
													<div className="star-rating">
														{/* <span
															className="star-rating__fill"
															style={{ width: '85%' }}
														></span> */}
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
													</div>
												</div>
											</div>
											<div className="testimonials-box-text">
												<h3 className="h3-title">Navnit Kumar</h3>
												<p>
													Lorem, ipsum dolor sit amet consectetur adipisicing
													elit. Itaque, quisquam.
												</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="testimonials-box">
											<div className="testimonial-box-top">
												<div className="back-img4"></div>
												<div className="star-rating-wp">
													<div className="star-rating">
														{/* <span
															className="star-rating__fill"
															style={{ width: '85%' }}
														></span> */}
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
														<BsFillStarFill />
													</div>
												</div>
											</div>
											<div className="testimonials-box-text">
												<h3 className="h3-title">Somyadeep Bhowmik</h3>
												<p>
													Lorem, ipsum dolor sit amet consectetur adipisicing
													elit. Itaque, quisquam.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Review;
