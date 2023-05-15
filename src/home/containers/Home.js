import { Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar/NavBar";
import BusinessItem from "../../shared/components/BusinessItem";
import Footer from "../../shared/components/Footer";
import SubscribeForm from "../../shared/components/SubscribeForm";

function Home() {
	return (
		<div>
			<NavBar />
			<div className="container flex-grow-1">
				<div className="p-4 container">
				<Row>
					<Col lg={8} md={6}>
						<div className="d-flex align-items-center">
						<h3 className="text-decoration-none text-secondary">
							Recommended For You
						</h3>
						</div>
						<p>Stay informed of new listings.</p>
					</Col>
					<Col lg={4} md={6}>
						<SubscribeForm />
					</Col>
					<BusinessItem
						title="Y's Boba Shop"
						address="1234 This St, This City, TS 01010"
						price="$732,000"
						image="./images/Y's Boba Shop.jpg"
					/>
					<BusinessItem
						title="Y's Commercial Building"
						address="4321 This St, This City, TS 10101"
						price="$1,370,000"
						image="./images/Y's Building.jpg"
					/>
					<BusinessItem
						title="Y's Rental Office Space"
						address="1324 This St, This City, TS 00100"
						price="$80,085"
						image="./images/Y's Rental Office Space.jpg"
					/>
					</Row>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
