import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
	return (
		<Container className="header" fluid>
			<Row>
				<Navbar className="col-12 text-light sticky-top pb-5 nav-bar">
					<Container>
						<Col className="col-6 col-lg-2">
							{/* Business Logo */}
							<div className="BusinessLogo">
								<h1 className="events text-center">
									<img
										src={"./images/BizEverywhereSign.jpg"}
										className="img-fluid"
										alt="Business Logo"
										width="50%"
									/>
								</h1>
							</div>
						</Col>
						<Col className="col-6 col-lg-10 text-end">
							<Nav className="justify-content-end">
								<Nav.Link
									href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
									className="nav-link px-2 text-primary"
								>
									Home
								</Nav.Link>
								<Nav.Link
									href="/businesses"
									className="nav-link px-2 text-secondary"
								>
									Buy
								</Nav.Link>
								<Nav.Link
									href="/businesses/new"
									className="nav-link px-2 text-secondary"
								>
									Sell
								</Nav.Link>
								<Nav.Link href="#" className="nav-link px-2 text-secondary">
									About Us
								</Nav.Link>
							</Nav>
						</Col>
					</Container>
				</Navbar>
			</Row>
			<Container className="pb-5">
				{/* Block of text between navbar and search bar*/}
				<Row className="align-items-center">
					<Col className="col-12 col-lg-6 offset-lg-3">
						<form className="mb-3 mb-lg-0">
							<Container className="my-3">
								<Row>
									<Col>
										<p className="lead display-4 text-light">
											Discover Your Space To Grow Your Business
										</p>
									</Col>
								</Row>
							</Container>
						</form>
					</Col>
				</Row>

				{/* Search Bar */}
				<Row className="align-items-center">
					<Col className="col-12 col-lg-6 offset-lg-3">
						<form className="mb-3 mb-lg-0">
							<div className="input-group">
								<input
									type="search"
									className="form-control form-control-dark"
									placeholder="Enter your zipcode..."
									aria-label="Search"
								/>
								<button className="btn btn-outline-light" type="button">
									Search
								</button>
							</div>
						</form>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default NavBar;
