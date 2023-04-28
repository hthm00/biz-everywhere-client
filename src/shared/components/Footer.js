import { Container, Row, Col } from "react-bootstrap";

function Footer() {
	return (
		<footer className="bg-dark footer mt-5 footer-expand-md footer-secondary">
			<Container className="py-3">
				<Row>
					<Col md={4} className="text-light">
						<h5 className="text-primary">BizEverywhere</h5>
					</Col>
					<Col md={2} className="text-light">
						<h5 className="text-primary">Features</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#" className="text-decoration-none text-light">
									Our Features
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration-none text-light">
									Pricing
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration-none text-light">
									Affiliate Program
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration-none text-light">
									Press Kit
								</a>
							</li>
						</ul>
					</Col>
					<Col md={2}>
						<h5 className="text-primary">Support</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#" className="text-decoration-none text-light">
									Account
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration-none text-light">
									Help
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration-none text-light">
									Contact Us
								</a>
							</li>
						</ul>
					</Col>
					<Col md={2}>
						<h5 className="text-primary">Legal</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#" className="text-decoration-none text-light">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration-none text-light">
									Terms of Use
								</a>
							</li>
						</ul>
					</Col>
					<Col md={2}>
						<h5 className="text-primary">Social Media</h5>
						<ul className="list-unstyled">
							<li>
								<a href="#" className="text-decoration-none text-light">
									Twitter
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration-none text-light">
									Product Hunt
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration-none text-light">
									Instagram
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration-none text-light">
									Github
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
