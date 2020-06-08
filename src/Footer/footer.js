import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer">
			<div className="container">
				<div className="get-started-block">
					<div className="row">
						<div className="col-md-6">
							<div className="started-left">
								<h2>Ready? Get Started</h2>
								<p>AIV is ready to help you accelerate your fundraising journey. Explore our products and services and come partner with us.</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="started-right">
								<a className="btn-main" href="#" type="button">Explore Products</a>
								<a className="border-btn" href="#" type="button">Need help?</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-menu">
					<div className="row">
						<div className="col-md-3">
							<ul className="footer-menuin">
								<img src="assets/images/logo-white.png"/>
								<li><a className="mb-5">99 Wall Street, New York <span className="d-block">NY 10005</span></a></li>
								<li><a href="#">Info@aiv.llc</a></li>
							</ul>
						</div>
						<div className="col-md-9">
							<div className="row">
								<div className="col-md-3">
									<ul className="footer-menuin">
										<p>OVERVIEW</p>
										<li><a href="#">Data</a></li>
										<li><a href="#">Taxonomy</a></li>
										<li><a href="#">NLP Models</a></li>
										<li><a href="#">Deployment</a></li>
										<li><a href="#">Integrations</a></li>
									</ul>
								</div>
								<div className="col-md-3">
									<ul className="footer-menuin">
										<p>PRODUCTS</p>
										<li><a href="#">Financial Markets</a></li>
										<li><a href="#">Banking</a></li>
										<li><a href="#">Insurance </a></li>
										<li><a href="#">Technology</a></li>
										<li><a href="#">Government</a></li>
									</ul>
								</div>
								<div className="col-md-3">
									<ul className="footer-menuin">
										<p>SERVICES</p>
										<li><a href="#">Company</a></li>
										<li><a href="#">Customers</a></li>
										<li><a href="#">Careers</a></li>
									</ul>
								</div>
								<div className="col-md-3">
									<ul className="footer-menuin">
										<p>CONTACT US</p>
										<li><a href="#">Sales </a></li>
										<li><a href="#">Media</a></li>
										<li><a href="#">Investment</a></li>
										<li><a href="#">Partnership</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<ul className="copyright-sec">
						<li>Copyright © 2014 – 2019 Applied Innovation Ventures</li>
						<li><a href="#">TERMS & CONDITIONS</a> / <a href="#">PRIVACY POLICY</a></li>
					</ul>
				</div>
			</div>
		</footer> 
        </>
    );
};

export default Footer;