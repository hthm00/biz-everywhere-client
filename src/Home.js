import { Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./home/components/NavBar/NavBar";
import BusinessItem from "./shared/components/BusinessItem";
import Footer from "./shared/components/Footer";
import SubscribeForm from "./shared/components/SubscribeForm";

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
						<BusinessItem />
						<BusinessItem />
						<BusinessItem />
					</Row>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Home;
