import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
	return (
		<>
			<section className="newsletter-sec py-5 my-5 section pt-0">
				<div className="sec-wp">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 m-auto">
								<div
									id="newsletter-back-img"
									className="newsletter-box text-center back-img white-text"
								>
									<div className="bg-overlay dark-overlay"></div>
									<div className="sec-wp">
										<div className="newsletter-box-text">
											<h2 className="h2-title">Subscribe our newsletter</h2>
											<p>
												This is Lorem ipsum dolor sit amet consectetur
												adipisicing elit ad veritatis.
											</p>
										</div>
										<form action="#" className="newsletter-form">
											<input
												type="email"
												className="form-input"
												placeholder="Enter your Email Here"
												required
											/>
											<button type="submit" className="btn sec-btn primary-btn">
												Submit
											</button>
										</form>
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

export default Newsletter;
