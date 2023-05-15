import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function BusinessItem(props) {
	return (
		<div className="col-sm-4">
			<div className="card text-bg-light">
				<img
					src={props.image}
					className="img-fluid"
					alt={props.title}
				/>
				<div className="card-body">
					<a href="#" className="stretched-link"></a>
					<div className="row align-items-center text-left">
						<div className="col-12">
						<div className="d-flex align-items-center">
							<h3 className="text-decoration-none text-secondary">
								{props.title}
							</h3>
							<button className="btn btn-outline-primary btn-heart border-0">
								<FontAwesomeIcon icon={faHeart} />
							</button>
						</div>
						<a className="text-decoration-none text-secondary">
							{props.address}
						</a>
						<br />
						<a className="text-decoration-none text-primary">
							{props.price}
						</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BusinessItem;